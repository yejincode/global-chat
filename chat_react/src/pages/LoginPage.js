import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function LoginPage(){
    return(
        <div>
            <div className="layout">
                <div className="main order-md-1">
                    <div className="start">
                        <div className="container">
                            <div className="col-md-12">
                                <div className="content">
                                    <h1>Sign in to 번역프로젝트</h1>
                                    <div className="third-party">
                                        <Button variant="btn item bg-blue">
                                            <i className="material-icons">pages</i>
                                        </Button>
                                        <Button variant="btn item bg-teal">
                                            <i className="material-icons">party_mode</i>
                                        </Button>
                                        <Button variant="btn item bg-purple">
                                            <i className="material-icons">whatshot</i>
                                        </Button>
                                    </div>
                                    <p>or use your email account:</p>
                                    <form>
                                        <div className="form-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required></input>
                                            <Button variant="btn icon"><i className="material-icons">mail_outline</i></Button>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                                            <Button variant="btn icon"><i className="material-icons">lock_outline</i></Button>
                                        </div>
                                        <Button type="submit" variant="btn button" formaction="/">Sign In</Button>
                                        <div className="callout">
                                            <span>Don't have account? <Link to='/signup'>Create Account</Link></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aside order-md-2">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="preference">
                                <h2>Hello, Friend!</h2>
                                <p>Enter your personal details and start your journey with Swipe today.</p>
                                <Link to='/signup' className="btn button">Sign Up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>
    );
}

export default LoginPage;