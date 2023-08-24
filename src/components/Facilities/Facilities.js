import React from 'react';
import { Link } from 'react-router-dom';
import room from '../../assets/img/room.jpg';
// import health from '../../assets/img/health.jpg';
import food from '../../assets/img/food.jpg';
import sports from '../../assets/img/dining-area-of-sports.jpg';
import events from '../../assets/img/events.jpg';
import './Facilities.scss';

const Facilities = () => {
	return (
		<section id="facilities" className="facilities py-4">
			<div className="container py-5 pb-3">
				<div className="py-5 pb-0">
					<div className="row gx-2">
						<div className="col-xl-6">
							<div className="eCommerce-widget position-relative border overflow-hidden p-2 rounded mb-2">
								<img src={room} alt="img" className="img-fluid rounded w-100" />
								<div className="eCommerce-widget-content position-absolute rounded top-0 start-0 p-5 text-light">
									<h4 className="mb-2 fs-3 fw-normal">Rooms</h4>
									{/* <p className="mb-3 lh-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, mollitia!...</p> */}
									<Link to="/" className="btn btn-sm btn-primary text-light bg-gradient px-3 border-0 rounded-pill is-shadow">
										Explore More
									</Link>
								</div>
							</div>
						</div>
						{/* <div className="col-xl-8">
							<div className="eCommerce-widget position-relative border overflow-hidden p-2 rounded mb-2">
								<img src={health} alt="img" className="img-fluid rounded w-100" />
								<div className="eCommerce-widget-content position-absolute rounded top-0 start-0 p-5 text-light">
									<h4 className="mb-2 fs-3 fw-normal">Health Club</h4>
									<p className="mb-3 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat. ...</p>
									<Link to="/" className="btn btn-sm btn-danger text-light bg-gradient px-3 border-0 rounded-pill is-shadow">
										Explore More
									</Link>
								</div>
							</div>
						</div> */}
						<div className="col-xl-6">
							<div className="eCommerce-widget position-relative border overflow-hidden p-2 rounded mb-2">
								<img src={food} alt="img" className="img-fluid rounded w-100" />
								<div className="eCommerce-widget-content position-absolute rounded top-0 start-0 p-5 text-light">
									<h4 className="mb-2 fs-3 fw-normal">Food</h4>
									{/* <p className="mb-3 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat. ...</p> */}
									<Link to="/" className="btn btn-sm btn-warning text-light bg-gradient px-3 border-0 rounded-pill is-shadow">
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="eCommerce-widget position-relative border overflow-hidden p-2 rounded mb-2">
								<img src={sports} alt="img" className="img-fluid rounded w-100" />
								<div className="eCommerce-widget-content position-absolute rounded top-0 start-0 p-5 text-light">
									<h4 className="mb-2 fs-3 fw-normal">Sports Cafe</h4>
									{/* <p className="mb-3 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat. ...</p> */}
									<Link to="/" className="btn btn-sm btn-success text-light bg-gradient px-3 border-0 rounded-pill is-shadow">
										Explore More
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-6">
							<div className="eCommerce-widget position-relative border overflow-hidden p-2 rounded mb-2">
								<img src={events} alt="img" className="img-fluid rounded w-100" />
								<div className="eCommerce-widget-content position-absolute rounded top-0 start-0 p-5 text-light">
									<h4 className="mb-2 fs-3 fw-normal">Events</h4>
									{/* <p className="mb-3 lh-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quaerat. ...</p> */}
									<Link to="/" className="btn btn-sm btn-danger text-light bg-gradient px-3 border-0 rounded-pill is-shadow">
										Explore More
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Facilities;
