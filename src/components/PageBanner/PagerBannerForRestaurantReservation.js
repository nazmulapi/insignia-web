import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/insignia.png';
import './PageBanner.scss';

const PagerBannerForRestaurantReservation = ({ minusTop, title, isOffline, background }) => {
	return (
		<>
			<div className="PagerBannerForRestaurantReservation">
				<div className="PageBanner-row PagerBannerForRestaurantReservation-row px-0" style={{ backgroundImage: `url(${background})` }}>
					<div className="PageBanner-content pt-5">
						<div className="pt-5">
							<img src={logo} alt="logo" className="img-fluid mb-2 mt-5" style={{ height: '150px' }} />
							<h1 className="display-6 text-light mb-3 lh-0">
								{title ? title : <span>Insignia Restaurant <span className="text-danger">{isOffline ? 'Offline' : null}</span> Reservation </span> }
							</h1>
							<Link className="btn btn-danger bg-gradient btn-sm font-monospace px-3 mb-3" to={'/'}>
								&#171; Back to Home Page
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PagerBannerForRestaurantReservation;
