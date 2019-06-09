import React from "react";
import { Context } from "../store/appContext";

class Login extends React.Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<div className="col-lg-10 col-xl-9 mx-auto">
										<div className="card card-signin flex-row my-5">
											<div className="card-img-left d-none d-md-flex" />
											<div className="card-body">
												<h5 className="card-title text-center">Register</h5>

												<form className="form-signin">
													<div className="form-label-group">
														<input
															type="email"
															id="inputEmail"
															className="form-control"
															placeholder="Email address"
														/>
														<label htmlFor="inputEmail">Email address</label>
													</div>

													<hr />

													<div className="form-label-group">
														<input
															type="password"
															id="inputPassword"
															className="form-control"
															placeholder="Password"
															required
														/>
														<label htmlFor="inputPassword">Password</label>
													</div>

													<div className="form-label-group">
														<input
															type="password"
															id="inputConfirmPassword"
															className="form-control"
															placeholder="Password"
															required
														/>
														<label htmlFor="inputConfirmPassword">Confirm password</label>
													</div>

													<button
														className="btn btn-lg btn-primary btn-block text-uppercase"
														onClick={() =>
															actions.registerUser(
																document.querySelector("#inputEmail").value,
																document.querySelector("#inputPassword").value
															)
														}
														type="submit">
														Register
													</button>

													<a className="d-block text-center mt-2 small" href="/profile">
														Sign In
													</a>
													<hr className="my-4" />
												</form>
											</div>
										</div>
									</div>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;
