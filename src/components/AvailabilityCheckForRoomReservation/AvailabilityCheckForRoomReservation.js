import React from 'react';
import { GoCalendar } from 'react-icons/go';
import './AvailabilityCheckForRoomReservation.scss';
import { Link } from "react-router-dom";

const AvailabilityCheckForRoomReservation = ({ isDarkMode, ...props }) => {
	return (
		<div {...props}>
			<div className="container">
				<div className="wrapper mx-auto" style={{ maxWidth: '600px' }}>
					<p className={`text-capitalize text-start mb-1 mb-0 text-${isDarkMode === true ? 'dark' : 'light'}`}>
						<small>
							<var className="font-18">Check availability for room reservation &#x2015; <Link to="https://insignia-resorts.com/reservation/" className='text-light fw-bold'>Book now</Link></var>
						</small>
					</p>
					{/* <form
						className="check-availability bg-white p-1 px-3 rounded-1 mb-0 position-sticky top-0"
						style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}
					>
						<div className="row align-items-center d-block d-lg-flex gx-2">
							<div className="col-md-3">
								<div className="form-floating mb-1 mb-lg-0">
									<input
										type="date"
										defaultValue={new Date().toISOString().slice(0, 10)}
										min={new Date().toISOString().split('T')[0]}
										className="form-control border-0"
										id="checkIn"
										placeholder="Check In"
									/>
									<label htmlFor="checkIn" className="opacity-100">
										<GoCalendar /> Check In
									</label>
								</div>
							</div>
							<div className="col-md-3">
								<div className="form-floating mb-1 mb-lg-0">
									<input
										type="date"
										defaultValue={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)}
										min={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
										className="form-control border-0"
										id="checkOut"
										placeholder="Check Out"
									/>
									<label htmlFor="checkOut" className="opacity-100">
										<GoCalendar /> Check Out
									</label>
								</div>
							</div>
							<div className="col flex-shrink-0">
								<div className="form-floating mb-1 mb-lg-0">
									<input type="number" className="form-control border-0" min={0} defaultValue={'1'} id="adults" placeholder="Adults" />
									<label htmlFor="adults" className="opacity-100">
										Adults
									</label>
								</div>
							</div>
							<div className="col flex-shrink-0">
								<div className="form-floating mb-1 mb-lg-0">
									<input type="number" className="form-control border-0" min={0} defaultValue={'0'} id="children" placeholder="Children" />
									<label htmlFor="children" className="opacity-100">
										Children
									</label>
								</div>
							</div>
							<div className="col flex-shrink-0">
								<button type="submit" className="btn d-block text-nowrap w-100 btn-dark py-2 fs-6 bg-gradient btn-lg">
									Check
								</button>
							</div>
						</div>
					</form> */}
				</div>
			</div>
		</div>
	);
};

export default AvailabilityCheckForRoomReservation;
