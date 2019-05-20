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
							Bringing top notch service to your front door. More text and information will go here.
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
							Some card text so that is shows text in this area. Also another line as well to show
							multiple lines of text.
						</p>
						<a href="#" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
				<div className="card col-sm-4 d-inline-block">
					<img
						src="https://www.mountainbike-magazin.de/sixcms/media.php/6/SM2_AXS_Tucson_Launch_MR-6657_1500.13817226.jpg"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Mountain Bikes</h5>
						<p className="card-text">
							Some card text so that is shows text in this area. Also another line as well to show
							multiple lines of text.
						</p>
						<a href="#" className="btn btn-primary">
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
							Some card text so that is shows text in this area. Also another line as well to show
							multiple lines of text.
						</p>
						<a href="#" className="btn btn-primary">
							More Info{" "}
						</a>
					</div>
				</div>
			</div>
		);
	}
}
