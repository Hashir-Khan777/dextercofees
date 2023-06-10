import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";

import "./style.scss";
import { register } from "../../store/actions/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { CircularProgress } from "@material-ui/core";

const SignUpPage = (props) => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [value, setValue] = useState({
    email: "",
    full_name: "",
    password: "",
    confirm_password: "",
  });

  const { loading, data, token } = useSelector((state) => state.authReducer);

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      dispatch(
        register({
          name: value.full_name,
          email: value.email,
          password: value.password,
        })
      );
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  useEffect(() => {
    if (token) {
      setValue({
        email: "",
        full_name: "",
        password: "",
        confirm_password: "",
      });
      push("/verification");
    }
  }, [token]);

  useEffect(() => {
    if (cookies.get("_user")) {
      push("/");
    }
  }, [data]);

  return (
    <Grid className="loginWrapper">
      <div className="ps-4 pb-3 pb-md-5">
        <MdKeyboardReturn color="#666666" size={28} />
        <Link to={"/"}>
          <span className="ps-3 back-to-home">
            Return to Home Page
          </span>
        </Link>
      </div>
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={value.full_name}
                variant="outlined"
                name="full_name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "full name",
                value.full_name,
                "required"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                type="password"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Confirm Password"
                value={value.confirm_password}
                variant="outlined"
                name="confirm_password"
                label="Confirm Password"
                InputLabelProps={{
                  shrink: true,
                }}
                type="password"
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "confirm password",
                value.confirm_password,
                `in:${value.password}`
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter mt-0">
                <Button
                  fullWidth
                  className="btn btn_primary text-uppercase"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress color="#fff" size={20} />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </Grid>
              {/* <Grid className="loginWithSocial">
                <Button className="facebook">
                  <TfiFacebook />
                </Button>
                <Button className="twitter">
                  <AiOutlineGoogle />
                </Button>
                <Button className="linkedin">
                  <TfiLinkedin />
                </Button>
              </Grid> */}
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        {/* <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div> */}
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
