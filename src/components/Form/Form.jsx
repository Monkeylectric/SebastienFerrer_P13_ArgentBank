import './Form.css';
import InputWrapper from '../InputWrapper/InputWrapper';
// import { userLogin } from '../../services/data.service';
import { userLogin } from '../../store/storeReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { setUserLogin } from '../../store/storeActions';
import { useNavigate } from "react-router-dom";
import { storeSelector } from '../../store/storeSelectors';

function Form() {
    const email = 'tony@stark.com';
    const password = 'password123';

    // email: 'steve@rogers.com',
    // password: 'password456'

    const navigate = useNavigate();
    const user = useSelector(storeSelector);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // const email = document.querySelector("#username").value;
        // const password = document.querySelector("#password").value;

        dispatch(userLogin({email, password}));
    }

    useEffect(() => {
        if (user.isLogged) {
            navigate("/user");
        }
    }, [user.isLogged, user.authToken]);

    return (
        <form>
            <InputWrapper 
                className="input-wrapper" 
                type="text" 
                id="username" 
                label="Username" 
            />
            <InputWrapper 
                className="input-wrapper" 
                type="password" 
                id="password" 
                label="Password" 
            />
            <InputWrapper 
                className="input-remember" 
                type="checkbox" 
                id="remember-me" 
                label="Remember me" 
            />
            <button className="sign-in-button" onClick={(e) => handleSubmit(e)}>Sign In</button>
        </form>
    )
}

export default Form;