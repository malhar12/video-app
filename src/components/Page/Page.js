import React from 'react';
import './Page.scss';
import MainLogo from '../../assets/main-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes } from 'react-router-dom';

import SignIn from './../SignIn/SignIn.js';
import SignUp from './../SignUp/SignUp.js';
import ForgotPassWord from './../ForgotPassWord/ForgotPassWord.js';

const Page = () => {
    return (
        <>
            <main className="container">
                <aside className="aside-container">
                    <div className="top">
                        <img src={MainLogo} width="50px" height="50px" alt="main logo" />
                        <div className="logo-container">
                            <FontAwesomeIcon className="logo" icon={faVideo} />
                        </div>
                        <div className="logo-container">
                            <FontAwesomeIcon className="logo" icon={faPlay} />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="logo-container">
                            <FontAwesomeIcon className="logo" icon={faUser} />
                        </div>
                    </div>
                </aside>
                <section className="section-container">
                    <Routes>
                        <Route path="/" element={<SignIn />} />
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/forgot-password" element={<ForgotPassWord />} />
                    </Routes>
                </section>
            </main>
        </>
    );
}

export default Page;