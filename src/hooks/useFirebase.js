import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router";
import initializedApp from '../pages/Login/Firebase/initializedApp'

initializedApp();

const useFireBase = () => {

    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        }
        );
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${user.email}`)
            .then(data => setAdmin(data.data.admin))
    }, [user.email])

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // Need to customize
    const handleGoogleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'put');
                setError('');
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }

    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'post');
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        if (method === 'post') {
            axios.post('http://localhost:8080/users/create', user)
        }
        else if (method === 'put') {
            axios.put('http://localhost:8080/users/create', user)
        }

    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    return { admin, isLoading, registerUser, setIsLoading, handleGoogleSignIn, logOut, loginUser, user, error, setError };
};

export default useFireBase;