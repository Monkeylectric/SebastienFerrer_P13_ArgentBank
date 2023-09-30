import React, { useEffect } from 'react';
import './User.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import UserHeader from '../../components/UserHeader/UserHeader';
import Account from '../../components/Account/Account';
import Footer from '../../components/Footer/Footer';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storeSelector } from '../../store/storeSelectors';
// import { userProfile } from '../../services/data.service';
import { setUserProfil } from '../../store/storeActions';
import { userProfile } from '../../store/storeReducer';

function User() {
    const user = useSelector(storeSelector);
    console.log(user);
    const dispatch = useDispatch();

    const authToken = user.authToken;
    let firstName = user.userFirstName;
    let lastName = user.userLastName;
    // const userToken = sessionStorage.getItem("token");
    // console.log(userToken);
    
    if (!authToken) {
        return <Navigate to="/signin" />
    }

    // const getUser = async () => {
    //     const profile = await userProfile(authToken);
    //     const firstname = profile.body.firstName;
    //     const lastname = profile.body.lastName;

    //     dispatch(setUserProfil(firstname, lastname));
    // }
    
    useEffect(() => {
        dispatch(userProfile(authToken));
    }, [])

    return (
        <React.Fragment>
            <Navbar />
            <Main className="main bg-dark">
                <UserHeader firstname={firstName} lastname={lastName} />
                <h2 className="sr-only">Accounts</h2>
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" amountDescription="Available Balance" />
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" amountDescription="Available Balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" amountDescription="Available Balance" />
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default User;