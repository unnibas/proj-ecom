import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.setState({ email: '', password: ''} );
    }

    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' label='Email' value={this.state.email} type='email' required onChange={this.handleChange} />
                    <FormInput name='password' label='Password' value={this.state.password} type='password' required onChange={this.handleChange} />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>

            </div>
        );
    }
}

export default SignIn;