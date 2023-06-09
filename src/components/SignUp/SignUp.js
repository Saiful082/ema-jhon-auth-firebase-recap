import './SignUp.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if(password.length <3){
            setError('Password should be 3 characters or more.');
            return;
        }
        if(password !== confirm){
            setError('Your password did not match');
            return;

        }
    }
    return (
        <div className='form-container'>
        <h3 className='form-title'>Login</h3>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' required />
            </div>
            <input type="submit" className="btn-submit"  value='signup'/>
        </form>
        <p>Already have an Account? <Link to='/login'>SignUp</Link></p>
        <p className='text-error'>{error}</p>
    </div>
    );
};

export default SignUp;