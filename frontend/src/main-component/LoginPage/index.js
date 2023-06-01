import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineGoogle } from "react-icons/ai";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/action";
import Cookies from "universal-cookie";
import { CircularProgress } from "@material-ui/core";

const LoginPage = () => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const { loading, data } = useSelector((state) => state.authReducer);

  const [value, setValue] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      const userRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const email = value.email;

      if (email.match(userRegex)) {
        dispatch(
          login({
            email: value.email,
            password: value.password,
          })
        );
        validator.hideMessages();
      }
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  useEffect(() => {
    if (cookies.get("_user")) {
      setValue({
        email: "",
        password: "",
        remember: false,
      });
      push("/");
    }
  }, [data]);

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
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
                type="password"
                label="Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.remember}
                      onChange={rememberHandler}
                    />
                  }
                  label="Remember Me"
                />
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="btn btn_primary text-uppercase"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? (
                    <CircularProgress color="#fff" size={20} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <Button className="facebook">
                  <TfiFacebook />
                </Button>
                <Button className="twitter">
                  <AiOutlineGoogle />
                </Button>
                <Button className="linkedin">
                  <TfiLinkedin />
                </Button>
              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create free account</Link>
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

export default LoginPage;
