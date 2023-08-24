import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import img from '../assets/img/ins-1.JPG';

export default class Refund extends Component {
	render() {
		return (
			<>
				<PagerBannerForRestaurantReservation
					minusTop={true}
					title="Refund Policy"
					background={img}
				/>
				<div className="policy py-5">
					<div className="container">
						<div className="row">
							<div className="col-xl-10 text-light mx-auto">
								<div className="block mb-5">
									<h5 className="mb-3">REFUND POLICY :</h5>
									<p className="mb-0 fs-6 lh-base">
										<ul>
											<li className="mb-2">
												Full amount will be charged if guests fail to arrive at the resort on the booked date and time.
											</li>
											<li className="mb-2">
												On cancellation of refundable booking the refund processing will take time between Seven (7) to Ten
												(10) work days to show the refund back on your credit card statement. Reasons for the specified
												processing time are based on the billing cycle of your credit card company and processing time of the
												bank. The refund depends on numerous factors such as the hotel's cancellation policy, time of
												cancellation and processing fees etc. For more details refer to the cancellation policy mentioned
												above.
											</li>
										</ul>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
                <Footer />
			</>
		);
	}
}
