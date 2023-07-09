import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../../features/slices/userSlice";
import MenuBar from "../../Shared/MenuBar/MenuBar";
import OtherButtons from "../../Shared/OtherButtons/OtherButtons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((res) => {
      history.push("/dashboard");
    });
  };
  return (
    <div>
      <MenuBar />
      <div className="mx-3 myform">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-lg-3 mx-auto myform">
            <h3 className="text-center">Log In</h3>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                className="form-control"
                type="email"
                {...register("email")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                className="form-control"
                type="password"
                {...register("password")}
              />
              {/* <p className="text-danger">{errors}</p> */}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary text-center">
                Log In
              </button>
            </div>
            <br />
            <br />
            <h5>
              Not a User? <Link to="/signup">Register here</Link>
            </h5>
            <OtherButtons method="Log In"></OtherButtons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
