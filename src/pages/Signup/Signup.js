import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MenuBar from "../Shared/MenuBar/MenuBar";
import OtherButtons from "../Shared/OtherButtons/OtherButtons";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/slices/userSlice";

const Signup = () => {
  const { error, registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };

  return (
    <div>
      <MenuBar />
      <div className="mx-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="col-lg-3 mx-auto myform">
            <h3 className="text-center">Register</h3>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>

              <input
                className="form-control"
                type="email"
                {...register("email")}
              />

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
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

              <p className="text-danger">{error}</p>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="text-center btn btn-primary">
                Register
              </button>
            </div>
            <br />
            <br />
            <h5>
              ALready a User? <Link to="/login">Log In here</Link>
            </h5>
            <OtherButtons method="Register"></OtherButtons>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
