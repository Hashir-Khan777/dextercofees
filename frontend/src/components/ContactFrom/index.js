import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/actions/action";
import { CircularProgress } from "@material-ui/core";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    lastname: "",
    message: "",
    error: {},
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactReducer);
  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const subimtHandler = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      validator.hideMessages();
      dispatch(sendMessage(state));
    } else {
      validator.showMessages();
      toast.error("Empty field is not allowed!");
    }
  };

  return (
    <form onSubmit={subimtHandler} className="form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              value={state.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Name"
            />
            <p>{validator.message("first name", state.name, "required")}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              value={state.lastname}
              onChange={changeHandler}
              type="text"
              name="lastname"
              placeholder="Lastname"
            />
            <p>{validator.message("last name", state.lastname, "required")}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={state.email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p>{validator.message("email", state.email, "required|email")}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={state.subject}
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <p>{validator.message("subject", state.subject, "required")}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              name="message"
              value={state.message}
              onChange={changeHandler}
              placeholder="Message"
            ></textarea>
            <p>{validator.message("message", state.message, "required")}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button
              type="submit"
              disabled={loading}
              className="btn btn_primary text-uppercase mt-5"
            >
              {loading ? (
                <CircularProgress color="#fff" size={20} />
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
