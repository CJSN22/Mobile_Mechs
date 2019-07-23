import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<br />

				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">MobileMechs</h1>
						<p className="lead">
							Bringing top notch services for all your cycling needs right to your front door. No need to
							hassle with local shops to squeeze in a tune up at the last minute. Schedule your next
							service with MobileMechs and we will make sure your machine is race ready when you need it
							most!
						</p>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://cdn.road.cc/sites/default/files/styles/main_width/public/190110sramlaunch-1374_0.jpg?itok=t80FBZ8a"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Road Bikes</h5>
						<p className="card-text">
							Whether you are going full speed into a sprint or just enjoying a ride along the beach, a
							noisy bike will take the fun out of any ride. Schedule a tune up with MobileMechs to make
							sure your next ride is safe and quiet.
						</p>
						<a href="/services" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://www.bike-magazin.de/uploads/tx_saltnews/39/39800930a137fcab752fc3a7647001d83dc22b59.jpeg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Mountain Bikes</h5>
						<p className="card-text">
							Slipping gears and dropping chains usually results in one thing, and that is a pedal to the
							shin! Nobody wants a pedal to the shin! After a service from MobileMechs your bike will be
							back to gripping climbs and railing descents!
						</p>
						<a href="/services" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://bikepacking.com/wp-content/uploads/2014/07/bikes-troll-log-00.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Bike Builds</h5>
						<p className="card-text">
							If custom is what you want, custom is what you get! Take your new ride to the next level
							with all your favorite parts. With our Tune Up packages we have you covered from bikes that
							come shipped in a box to full custom builds!
						</p>
						<a href="/services" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
