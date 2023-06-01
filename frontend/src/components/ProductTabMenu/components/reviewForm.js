import React, { useState} from 'react';
import SimpleReactValidator from 'simple-react-validator';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";

const ReviewForm = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                name: '',
                email: '',
                message: ''
            });
            validator.hideMessages();
            toast.success('You submitted the form and stuff!');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    return (
        <Grid className="reviewForm">
            <form onSubmit={(e) => submitForm(e)}>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <TextField
                            className="formDefault"
                            fullWidth
                            value={value.name}
                            variant="outlined"
                            name="name"
                            label="Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                        />
                        {validator.message('name', value.name, 'required|alpha_space')}
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            className="formDefault"
                            fullWidth
                            value={value.email}
                            variant="outlined"
                            name="email"
                            label="Email"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                        />
                        {validator.message('email', value.email, 'required|email')}
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className="formDefault"
                            fullWidth
                            value={value.message}
                            variant="outlined"
                            name="message"
                            label="Message"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                        />
                        {validator.message('message', value.message, 'required')}
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" className="theme-btn">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
};

export default ReviewForm;