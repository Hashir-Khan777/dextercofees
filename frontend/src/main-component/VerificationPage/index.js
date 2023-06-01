import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import VerificationInput from "react-verification-input";
import Button from "@material-ui/core/Button";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../store/actions/action";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { CircularProgress } from "@material-ui/core";

const Verification = () => {
  const push = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const [value, setValue] = useState({
    code: "",
  });

  const { loading, data } = useSelector((state) => state.authReducer);

  const changeHandler = (e) => {
    setValue({ code: e });
  };

  const submitForm = () => {
    if (value.code.length === 6) {
      dispatch(verifyEmail(value));
    } else {
      toast.error("Empty field is not allowed!");
    }
  };

  useEffect(() => {
    if (cookies.get("_user")) {
      setValue({
        code: "",
      });
      push("/");
    }
  }, [data]);

  return (
    <Fragment>
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Verification Code</h2>
          <p>Verify your account</p>
          <div className="d-flex justify-content-center">
            <VerificationInput
              validChars="0-9"
              onChange={changeHandler}
              inputProps={{ inputMode: "numeric" }}
              length={6}
              classNames={{
                character: "character",
              }}
              placeholder=""
            />
          </div>
          <Grid className="formFooter">
            <Button
              fullWidth
              onClick={submitForm}
              className="btn btn_primary text-uppercase"
              type="submit"
              disabled={loading}
            >
              {loading ? <CircularProgress color="#fff" size={20} /> : "Verify"}
            </Button>
          </Grid>
          <p className="noteHelp mb-0">
            Already have an account? <Link to="/login">Return to Sign In</Link>
          </p>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Verification;
