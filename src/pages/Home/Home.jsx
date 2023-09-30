import React from 'react';
import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Footer from '../../components/Footer/Footer';

import ChatIcon from '../../img/icon-chat.png';
import MoneyIcon from '../../img/icon-money.png';
import SecurityIcon from '../../img/icon-security.png';

// import { useLoaderData } from "react-router-dom";

function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <Main>
                <Hero 
                    subtitles={["No fees.", "No minimum deposit.", "High interest rates."]} 
                    text="Open a savings account with Argent Bank today!" />
                <Features>
                    <FeatureItem 
                        src={ChatIcon} 
                        alt="Chat Icon" 
                        title="You are our #1 priority" 
                        text="Need to talk to a representative? You can get in touch through our
                            24/7 chat or through a phone call in less than 5 minutes." 
                    />
                    <FeatureItem 
                        src={MoneyIcon} 
                        alt="Money Icon" 
                        title="More savings means higher rates" 
                        text="The more you save with us, the higher your interest rate will be!" 
                    />
                    <FeatureItem 
                        src={SecurityIcon} 
                        alt="Security Icon" 
                        title="Security you can trust" 
                        text="We use top of the line encryption to make sure your data and money
                        is always safe." 
                    />
                </Features>
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Home;