import React from 'react';
import './SignIn.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';

function SignIn() {
    return (
        <React.Fragment>
            <Navbar />
            <Main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <Form />
                </section>
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default SignIn;