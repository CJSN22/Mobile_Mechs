import React, { Component } from "react";

export const Profile = () => (
	<div className="card justify-content-center m-5">
		<div className="row no-gutters">
			<div className="col-md-5">
				<img
					src="https://dgalywyr863hv.cloudfront.net/pictures/athletes/21345154/6091597/5/large.jpg"
					className="card-img"
					alt="..."
				/>
			</div>
			<div className="col-md-7">
				<div className="card-body">
					<h2 className="card-title">CJ Fabricius</h2>
					<h5 className="card-title">Deerfield Beach, Fl</h5>
					<h5 className="card-title">cjsn22@gmail.com</h5>

					<a href="/services" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
						Schedule Service
					</a>

					<table className="table table-sm table-borderless">
						<thead>
							<tr>
								<th scope="col">Bike</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Name</th>
								<td>Gina</td>
							</tr>
							<tr>
								<th scope="row">Brand</th>
								<td>Specialized</td>
							</tr>
							<tr>
								<th scope="row">Model</th>
								<td>Venge Pro</td>
							</tr>
						</tbody>
					</table>

					<table className="table table-sm table-borderless">
						<caption> * Year to date stats </caption>
						<thead>
							<tr>
								<th scope="col">My Stats</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Distance</th>
								<td>858 miles</td>
							</tr>
							<tr>
								<th scope="row">Time</th>
								<td>34h52m</td>
							</tr>
							<tr>
								<th scope="row">Rides</th>
								<td>30</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
);
