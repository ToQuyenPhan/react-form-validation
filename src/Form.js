import React, { useState } from 'react';
import SignupForm from './SignupForm';
import SuccessMessage from './SuccessMessage';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
            <div className="form-container">
                <div className="form-content-left">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="welcome-image" className="form-img" />
                </div>
                {!isSubmitted ? <SignupForm submitForm={submitForm} /> : <SuccessMessage />}
            </div>
        </>
    )
}

export default Form;