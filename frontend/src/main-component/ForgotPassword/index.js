import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../store/actions/action";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { CircularProgress } from "@material-ui/core";
import { MdKeyboardReturn } from "react-icons/md";

const ForgotPassword = (props) => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [value, setValue] = useState({
    email: "",
  });

  const { loading, resettoken } = useSelector((state) => state.authReducer);

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
      dispatch(forgotPassword(value));
      validator.hideMessages();
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  useEffect(() => {
    if (resettoken) {
      setValue({
        email: "",
      });
      push("/");
    }
  }, [resettoken]);

  return (
    <Grid className="loginWrapper">
      <div className="ps-4 pb-3 pb-md-5">
        <MdKeyboardReturn color="#666666" size={28} />
        <Link to={"/"}>
          <span className="ps-3 back-to-home">Return to Home Page</span>
        </Link>
      </div>
      <Grid className="loginForm">
        <h2>Forgot Password</h2>
        <p>Reset your account password</p>
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
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="btn btn_primary text-uppercase"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <CircularProgress color="#fff" size={20} />
                  ) : (
                    "Forgot Password"
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

export default ForgotPassword;
