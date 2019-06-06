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

					<button
						type="button"
						className="btn btn-primary"
						data-toggle="modal"
						data-target="#exampleModalCenter">
						Schedule Service
					</button>

					<div
						className="modal fade"
						id="exampleModalCenter"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true">
						<div className="modal-dialog modal-dialog-centered" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalCenterTitle">
										Modal title
									</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">...</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Close
									</button>
									<button type="button" className="btn btn-primary">
										Save changes
									</button>
								</div>
							</div>
						</div>
					</div>

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
