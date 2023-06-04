import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../store/actions/action";

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
  const { loading } = useSelector((statde) => state.contactReducer);

  const changeHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const subimtHandler = (e) => {
    e.preventDefault();

    for (var i = 0; i < Object.keys(state).length; i++) {
      if (typeof state[Object.keys(state)[i]] == "string") {
        if (state[Object.keys(state)[i]] == "") {
          setState((prev) => ({
            ...state,
            error: {
              ...state.error,
              [Object.keys(prev)[i]]: `Please enter your name`,
            },
          }));
          console.log(state.error, Object.keys(state)[i]);
        }
      }
    }

    // if (state.name == "") {
    //   setState({
    //     ...state,
    //     error: {
    //       ...state.error,
    //       name: "Please enter your name",
    //     },
    //   });
    // }

    // if (state.email == "") {
    //   setState({
    //     ...state,
    //     error: {
    //       ...state.error,
    //       email: "Please enter your email",
    //     },
    //   });
    // }

    // if (state.subject == "") {
    //   setState({
    //     ...state,
    //     error: {
    //       ...state.error,
    //       subject: "Please enter your subject",
    //     },
    //   });
    // }

    // if (state.lastname == "") {
    //   setState({
    //     ...state,
    //     error: {
    //       ...state.error,
    //       lastname: "Please enter your lastname",
    //     },
    //   });
    // }

    // if (state.message == "") {
    //   setState({
    //     ...state,
    //     error: {
    //       ...state.error,
    //       message: "Please enter your message",
    //     },
    //   });
    // }

    console.log(Object.keys(state.error).length);

    if (!Object.keys(state.error).length) {
      dispatch(sendMessage(state));
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
            <p>{state.error?.name ? state.error?.name : ""}</p>
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
            <p>{state.error?.lastname ? state.error?.lastname : ""}</p>
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
            <p>{state.error?.email ? state.error?.email : ""}</p>
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
            <p>{state.error?.subject ? state.error?.subject : ""}</p>
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
            <p>{state.error?.message ? state.error?.message : ""}</p>
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
