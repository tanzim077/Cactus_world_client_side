import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializedApp from '../pages/Login/Firebase/initializedApp'

initializedApp();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    // const emailHandle = e => {
    //     setEmail(e.target.value);
    // }
    // const passwordHandle = p => {
    //     setPassword(p.target.value);
    // }

    // const nameHandle = n => {
    //     setDisplayName(n.target.value);
    // }

    const handleGoogleSignIn = () => {
        setIsLoading(true)
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, provider);
    }

    // const signinUsingGithub = () => {
    //     const provider = new GithubAuthProvider();
    //     const auth = getAuth();
    //     return signInWithPopup(auth, provider)
    // }

    // const logOut = () => {
    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //         setUser({})
    //     }).catch((error) => {
    //     });
    // }

    // return { isLoading, setIsLoading, displayName, handleGoogleSignIn, signinUsingGithub, emailHandle, passwordHandle, nameHandle, logOut, user, error, email, password, setError };
    return { isLoading, setIsLoading, displayName, handleGoogleSignIn, user, error, email, password, setError };
};

export default useFireBase;