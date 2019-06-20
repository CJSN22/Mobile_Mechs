import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Services } from "./component/services";
import Login from "./component/login";
import { Profile } from "./component/profile";
import { Register } from "./component/register";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/demo" component={Demo} />
							<Route path="/services" component={Services} />
							<Route path="/login" component={Login} />
							<Route path="/profile" component={Profile} />
							<Route
								path="/register"
								component={Register}
								loc="https://www.strava.com/oauth/authorize?client_id=35677&response_type=code&redirect_uri=https://8080-e005674b-f343-4535-998c-3efaaa308702.ws-us0.gitpod.io/profile/&approval_prompt=force"
							/>
							<Route path="/single/:theid" component={Single} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
