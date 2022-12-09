import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
function JoinPage(){
    return(
        <div>
            <div className="layout">
				<div className="main order-md-2">
					<div className="start">
						<div className="container">
							<div className="col-md-12">
								<div className="content">
									<h1>Create Account</h1>
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
									<p>or use your email for registration:</p>
									<form className="signup">
										<div className="form-parent">
											<div className="form-group">
												<input type="text" id="inputName" className="form-control" placeholder="Username" required></input>
												<Button variant="btn icon"><i className="material-icons">person_outline</i></Button>
											</div>
											<div className="form-group">
												<input type="email" id="inputEmail" className="form-control" placeholder="Email Address" required></input>
												<Button variant="btn icon"><i className="material-icons">mail_outline</i></Button>
											</div>
										</div>
										<div className="form-group">
											<input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
											<Button variant="btn icon"><i className="material-icons">lock_outline</i></Button>
										</div>
										<Button type="submit" className="btn button" formaction="/login">Sign Up</Button>
										<div className="callout">
											<span>Already a member? <Link to='/login'>Sign In</Link></span>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="aside order-md-1">
					<div className="container">
						<div className="col-md-12">
							<div className="preference">
								<h2>Welcome Back!</h2>
								<p>To keep connected with your friends please login with your personal info.</p>
                                <Link to='/login' className="btn button">Sign In</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
        
    );
}

export default JoinPage;