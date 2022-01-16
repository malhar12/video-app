import React from 'react';
import './Page.scss';
import MainLogo from '../../assets/main-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faPlay, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Route, Routes } from 'react-router-dom';

import SignIn from '../Login/SignIn/SignIn.js';
import SignUp from '../Login/SignUp/SignUp.js';
import ForgotPassWord from './../ForgotPassWord/ForgotPassWord.js';
import VideoBuilder from '../video-builder/VideoBuilder';

const Page = () => {
    return (
        <>
            <main className="main-container">
                <aside className="aside-container">
                    <div className="top">
                        <img src={MainLogo} width="50px" height="50px" alt="main logo" />
                        <div className="logo-container">
                            <Link to="/video-builder">
                                <FontAwesomeIcon className="logo" icon={faVideo} />
                            </Link>
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
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/forgot-password" element={<ForgotPassWord />} />
                        <Route path="/video-builder" element={<VideoBuilder />} />
                    </Routes>
                </section>
            </main>
        </>
    );
}

export default Page;