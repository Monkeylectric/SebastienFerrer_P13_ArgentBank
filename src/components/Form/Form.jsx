import './Form.css';
import InputWrapper from '../InputWrapper/InputWrapper';
import { userLogin } from '../../store/storeActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { storeSelector } from '../../store/storeSelectors';

/**
 * Component which displays form
 * with inputs and submit button
 * 
 * @returns Form component
 */
function Form() {
    const navigate = useNavigate();
    const user = useSelector(storeSelector);
    const dispatch = useDispatch();

    const [error, setError] = useState({});

    const formValidation = (email) => {
        if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))){
            setError({
                ...error,
                email: "Veuillez renseigner un format valide",
            })

            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setError({});

        let email = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let rememberMe = document.querySelector("#remember-me").checked;

        const validation = formValidation(email);
        
        if (validation) {
            dispatch(userLogin({email, password, rememberMe}));
        }
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
                error={error.email}
            />
            <InputWrapper 
                className="input-wrapper" 
                type="password" 
                id="password" 
                label="Password" 
                error={error.password}
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