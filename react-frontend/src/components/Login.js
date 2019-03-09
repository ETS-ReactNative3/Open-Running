import React, { Component } from 'react';
import { DefaultButton, TextField, Label } from 'office-ui-fabric-react';

const divStyle = {
    width: '32rem',
    marginLeft: '30%',
    marginTop: '3rem'
};

const titleStyle = {
    fontSize: '3rem'
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false };
    }

    render() {
        return (
            <div style={ divStyle }>
                <Label style={ titleStyle }>Open Running</Label>
                <form>
                    <Label>Log In</Label>
                    <TextField label='Username' type='username' required={true} />
                    <TextField label='Password' type='password' required={true} />
                    <DefaultButton>Log In</DefaultButton>
                </form>
                <form>
                    <Label>Create an Account</Label>
                    <TextField label='Username' type='username' required={true} />
                    <TextField label='Password' type='password' required={true} />
                    <TextField label='Confirm Password' type='password' required={true} />
                    <DefaultButton>Register</DefaultButton>
                </form>
            </div>
        );
    }
}

export default Login;