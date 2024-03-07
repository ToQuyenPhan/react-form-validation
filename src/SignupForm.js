import React from 'react';

const SignupForm = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Get started with us!</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input id='username' name='username' type="text" className="form-input" placeholder='Enter your username...' />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id='email' name='email' type="email" className="form-input" placeholder='Enter your email...' />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input id='password' name='password' type="password" className="form-input" placeholder='Enter your password...' />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input id='password2' name='password2' type="password" className="form-input" 
                        placeholder='Enter your confirm password...' />
                </div>
                <button className="form-input-btn" type='submit'>Sign up</button>
                <span className="form-input-login">
                    Already have an account? Login <a href='#'>here.</a>
                </span>
            </form>
        </div>
    )
}

export default SignupForm;