import React, { Component } from 'react';
import Footer from '../components/Footer/Footer';
import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import img from '../assets/img/ins-1.JPG';


export default class HotelResortPolicy extends Component {
	render() {
		return (
			<>
				<PagerBannerForRestaurantReservation
					minusTop={true}
					title="IHR T&C, CANCELLATION, SMOKING & HOTEL POLICIES"
					background={img}
				/>
				<div className="policy py-5">
					<div className="container">
						<div className="row">
							<div className="col-xl-10 text-light mx-auto">
								<h3 className="display-5 mb-4">Terms & Conditions</h3>
								<div className="block mb-5">
									<h5 className="mt-3">HOTEL & RESORT POLICY:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												We would always appreciate that our valued guests should always extend their cooperation towards
												Insignia to abide by our General Guest Policies.
											</li>
											<li className="mb-2">
												Any such activity which is against the social values and law of the country is strictly prohibited in
												the premises of Insignia.
											</li>
											<li className="mb-2">
												SMOKING IS STRICTLY PROHIBITED IN THE ROOMS AND IN THE ENTIRE PREMISES OTHER THAN THE DESIGNATED
												AREAS!
											</li>
											<li className="mb-2">
												SMOKING WILL COST YOUR HEALTH AND YOUR POCKET!!! ANY VIOLATION BY SMOKING WOULD BE CHARGED A FINE OF
												BDT 7,000/-
											</li>
											<li className="mb-2">
												AS PER THE GOVERNMENT OF BANGLADESH RULES, SMOKING IS PROHIBITED IN ALL PUBLIC AREAS AND IN THE ROOMS
												OF THE HOTEL. IT IS ONLY PERMITTED IN THE DESIGNATED AREAS.
											</li>
											<li className="mb-2">
												ANY SMOKING VIOLATION IN THE ROOM OR NON DESIGNATED AREAS, WOULD BE CHARGED BDT
												7,000/-(NON-REFUNDABLE). THIS SMOKE ELIMINATION FEE WILL BE POSTED TO THE GUEST ACCOUNT UPON CHECK-OUT
												OR PROCESSED AS A LATE CHARGE ON THE GUEST ACCOUNT, IF THE VIOLATION IS REPORTED AFTER THE GUEST HAS
												DEPARTED.
											</li>
											<li className="mb-2">THE SMOKE ELIMINATION FEE MAY BE SUBJECT TO CHANGE.</li>
											<li className="ms-5 mt-3">
												Guests are requested to make a reservation by visiting our website, calling our reservation numbers
												and/or via email.
											</li>
											<li className="ms-5">
												Our entire team looks forward to be of service to you and your guests. Please feel free to contact us
												in case you seek any assistance.
											</li>
										</ul>
									</p>
								</div>

								<div className="block mb-5">
									<h5 className="mt-3">CHECK-IN / CHECK-OUT:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">Check-In time is 1400 hours & Check-out time is 1200 hours.</li>
											<li className="mb-2">Half Day charge will be applicable for check-out after 1400 hours.</li>
											<li className="mb-2">
												Early Check-in and Late Check-out is subject to a full night charge. (Subject to availability)
											</li>
											<li className="mb-2">
												Early check-In or Late-Check out is subjected to bed/room availability on the relevant day, To be
												reconfirmed with the front office staff.
											</li>
											<li className="mb-2">
												A levy is chargeable for early check-in from 0700 to 1200 hours and late check-out from 1200 to 1800
												hours.
											</li>
											<li className="mb-2">
												Room not occupied by 2200 hours will be seen as ‘No Show’, unless prior arrangement has been made.
											</li>

											<li className="mb-2">
												Usually only two (2) persons are permitted per room. However, if an extra person is to stay Tk.2,500++
												(inclusive one extra breakfast) to be charged for an extra bed on a limited basis.
											</li>
											<li className="mb-2">
												Accepted Payment Options - American Express, MasterCard, Visa, Q-Cash, Union Pay & cash.
											</li>
											<li className="mb-2">
												Pre-authorization of your credit card will be done during check in. Pre-authorization is technically a
												"hold" on your credit card credit line from a purchase placed there by a merchant (Insignia Hotels &
												Resorts) who has initiated a charge, but not completely processed it. When the merchant (Insignia
												Hotels & Resorts) actually completes the charge process, the pre-authorization amount will be replaced
												by an actual charge debited from your card. If the actual charge is less than the pre-authorization
												amount, the rest of it will be released up to 7 days after your departure.
											</li>
											<li className="mb-2">
												Important: We only accept credit cards for pre-authorisation. The amount we obtain will depend on the
												length of your stay, however the member of staff checking you in will explain this process clearly. No
												funds will be taken from your credit card but it will show as a 'Pending Transaction'.
											</li>
											<li className="mb-2">
												The authorisation of your card will last the length of your stay and it will take up to 7 days after
												your departure to be released. You can use a different card to settle your final bill. If you have any
												questions about pre-authorisation, please contact one of our Front Office team members.
											</li>
											<li className="mb-2">
												To prevent identity theft, credit card fraud and chargebacks to the hotel, we want to confirm that the
												person paying with the card is also the person with the authority to use that card. Additionally, to
												avoid card-not-present chargeback situations we are required to scan the chip in your card by running
												it through the card reader.
											</li>
										</ul>
									</p>
								</div>

								<div className="block mb-5">
									<h5 className="mt-3">OCCUPANCY:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												Normal occupancy permits a maximum of two people per room. Additional person (if room size permits) is
												charged extra as per the prevalent rate of the Hotel.
											</li>
											<li className="mb-2">Complimentary breakfast for two (2) persons per room.</li>
											<li className="mb-2">Additional breakfast will be charged at applicable rates.</li>
											<li className="mb-2">
												Children aged 5 years and under can share the bed with parents & stay Free of charge. (Proof of age
												required)
											</li>
											<li className="mb-2">
												Complimentary Breakfast for children aged 5 years and under (Proof of age required)
											</li>
											<li className="mb-2">
												Complimentary Breakfast and Meals for Grandparent/s or parent/s aged 75 years and over. (Proof of age
												required. Note: We are a wheelchair access property)
											</li>
											<li className="mb-2">
												Children aged between 5 to 7 years are levied 50% of Regular Charge. (Proof of age required)
											</li>
											<li className="mb-2">Children aged 7 years and over are levied Full Charge. (Proof of age required)</li>
											<li className="mb-2">Children's Play Area is free of charges</li>
											<li className="mb-2">Extra Bed for children or Baby Cot for infants is chargeable.</li>
											<li className="mb-2">Guests under Twelve (12) years of age are defined as Children.</li>
											<li className="mb-2">Guests Seven (7) years and over are defined as young adults.</li>
											<li className="mb-2">
												There is no provision for Drivers and maids. However, we can arrange rooms for Drivers in a separate
												place of the resort as a dormitory system (cost approximately Tk.2,000/- net full board basis) if we
												are notified in advance.
											</li>
											<li className="mb-2">
												We are unable to confirm any request for bed type preferences, which are subject to availability of
												the preferred room type at the time of check-in.
											</li>
											<li className="mb-2">Pets and outside food are strictly prohibited.</li>
										</ul>
									</p>
								</div>

								<div className="block mb-5">
									<h5 className="mt-3">RESERVATIONS & PAYMENT POLICY:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">Hotel Currency is Bangladeshi Taka (BDT)</li>
											<li className="mb-2">
												Advance in Online Payment/Cash deposit (into a designated bank account of the hotel) is mandatory to
												obtain the confirmed reservation. Please read the cancellation policy before obtaining the confirmed
												reservation.
											</li>
											<li className="mb-2">
												Rates displayed online are not guaranteed until the confirmation voucher is generated. The rates are
												generally dynamic in nature. Once a rate is selected and a transaction is executed by you, no other
												rate is applicable either higher or lower and no refund is admissible.
											</li>
											<li className="mb-2">
												The estimated cost for stay includes the confirmed room rate, the estimated taxes, and estimated
												fees.The actual taxes, fees and cess prevalent at the time of stay shall be applicable, which may vary
												from the estimates and you are liable to pay any extra cost on account of such amendments in taxes,
												fees, cess etc.
											</li>
											<li className="mb-2">The bill on check out for stay shall be charged in the hotel’s local currency.</li>
											<li className="mb-2">
												We reserve the right to modify or cancel the reservation if it appears, at sole discretion of the
												hotel, that a guest is engaged in fraudulent, illegal or other inappropriate activity or the
												reservation is obtained fraudulently or with malafide intention or mistake or error.
											</li>
											<li className="mb-2">
												On check in to the hotel, please present the hotel reservation confirmation voucher along with
												Passport, National Identity Card issued by the government and a valid credit card for any incidental
												and/ or extra charges.
											</li>
											<li className="mb-2">All promotion/sale rates are restrictive fares and are non-refundable.</li>
											<li className="mb-2">
												Certain promotion/sale Rates do not permit any changes in the hotel booking. Please check restrictions
												on the rate while booking.
											</li>
											<li className="mb-2">
												Under all promotion(s)/sale rates, limited inventory is available on select Room type(s) only on a
												first come first served basis.
											</li>
											<li className="mb-2">
												Insignia Hotels & Resorts reserves the right to withdraw and/or amend the promotion/sale without any
												prior notice.
											</li>
											<li className="mb-2">
												All extra services & amenities not part of the offer will be available at an additional charge only.
											</li>
											<li className="mb-2">
												Offers cannot be combined with any other offer/promotion or benefit(s) available through any loyalty
												program run by Insignia Hotels & Resorts or any third party.
											</li>
											<li className="mb-2">
												Rates may change without notice and may vary for special events except for confirmed reservation
												against the advance payment.
											</li>
											<li className="mb-2">
												All rates are subject to prevailing local taxes as applicable on room tariff & services opted.
											</li>
											<li className="mb-2">
												Guests must confirm the reservation by paying in advance within 72 hours or earlier, prior to arrival
												at the property.
											</li>
											<li className="mb-2">
												Guests must confirm the reservation instantaneously, if reserving 48 hours prior to arrival at the
												property.
											</li>
											<li className="mb-2">Reservation is subject to availability of rooms</li>
											<li className="mb-2">Reservation for 1 - 2 nights - 100% Advance payment is required.</li>
											<li className="mb-2">
												Reservation for more than 2 nights/multiple nights - 75% Advance payment is required.
											</li>
											<li className="mb-2">
												We will also hold 1 night’s pay as a security deposit against incidentals or damages. (This amount
												will be released/adjusted at the time of check-out, if there are no incidentals or damages.
											</li>
											<li className="mb-2">
												AS PER THE GOVERNMENT OF BANGLADESH RULES, SMOKING IS PROHIBITED IN ALL PUBLIC AREAS AND IN THE ROOMS
												OF THE HOTEL. IT IS ONLY PERMITTED IN THE DESIGNATED AREAS.
											</li>
											<li className="mb-2">
												ANY SMOKING VIOLATION IN THE ROOM OR NON DESIGNATED AREAS, WOULD BE CHARGED BDT
												7,000/-(NON-REFUNDABLE). THIS SMOKE ELIMINATION FEE WILL BE POSTED TO THE GUEST ACCOUNT UPON CHECK-OUT
												OR PROCESSED AS A LATE CHARGE ON THE GUEST ACCOUNT, IF THE VIOLATION IS REPORTED AFTER THE GUEST HAS
												DEPARTED.
											</li>
											<li className="mb-2">All tariffs are subject to 10% Service Charge and 15% VAT</li>
											<li className="mb-2">
												The guest must share the record/docs of a successful transaction to reservations@insignia-resorts.net
											</li>
											<li className="mb-2">
												Insignia Hotels & Resorts will not be responsible for any transaction made without the cardholder’s
												consent.
											</li>
										</ul>
									</p>
								</div>
								<div className="block mb-5">
									<h5 className="mt-3">CANCELLATION POLICY:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												For any individual booking: Cancellation Notice must be given at least 72 hours prior to
												Arrival/Check-in date to avoid cancellation charges.
											</li>
											<li className="mb-2">Request for cancellation prior to 72 Hours or earlier has no charges.</li>
											<li className="mb-2">
												Cancellation request prior to 24 Hours of the arrival date, 100% on room charges + Bank Settlement and
												Handling/Processing Fee will be applied as cancellation fees.
											</li>
											<li className="mb-2">
												Cancellation request prior to 48 Hours of the arrival date, 50% on room charges + Bank Settlement and
												Handling/Processing Fee will be applied as cancellation fees.
											</li>
											<li className="mb-2">
												During Peak Season & specific periods or Black Out dates, but not limited to, such as consecutive
												Government holidays, Eid-Ul-Fitr, Eid-Ul-Azha, Christmas, Buddha Purnima, Bengali New Year, Durga
												Puja, English New Year’s Eve etc., all reservations payments are non-refundable.
											</li>
										</ul>
									</p>
								</div>

								<div className="block mb-5">
									<h5 className="mt-3">NO SHOW POLICY:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												Full amount will be charged if guests fail to arrive at the resort on the booked date and time.
											</li>
											<li className="mb-2">
												A reservation becomes a No-Show when the customer who has a valid reservation does not cancel it
												before the hotel’s cancellation deadline, and never arrives to claim the reservation .
											</li>
											<li className="mb-2">
												Room not occupied by 2200 hours will be treated as ‘No Show’, unless prior arrangement has been made.
											</li>
											<li className="mb-2">
												If you fail to arrive at the hotel on the arrival date the entire reservation will be canceled
												automatically by the hotels and will be charged for the entire reservation.
											</li>
											<li className="mb-2">
												If you fail to check in on the first date but still continue your travel plan to stay at the hotel,
												please, urgently, contact us to keep the room for you for the rest of the nights. Otherwise as
												mentioned above, the entire reservation will be auto-canceled and no refund admissible.
											</li>
											<li className="mb-2">
												Shortened stay is subject to the entire period charge whether or not you stay the entire period. If
												you know the change in your plan, please contact us at the earliest to minimize the charge by the
												hotel subject to cancellation policy.
											</li>
										</ul>
									</p>
								</div>
								<div className="block mb-5">
									<h5 className="mt-3">SPECIAL REQUEST:</h5>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												Please note that Hotel neither guarantees nor liable to admit any request for amendment in plan or any
												other special requests which shall be admissible subject to availability on arrival. The request for
												airport pick-up requires intimation to the reservation at the time of the room(s) booking.
											</li>
										</ul>
									</p>
								</div>
								<div className="block mb-5">
									<h5 className="mt-3">CONFIRMATION VOUCHER:</h5>
									<p className="mb-2">
										The reservation once confirmed, a confirmation number and the voucher is generated that you can print for your
										convenience. It is necessary to present the confirmation voucher to the hotel on arrival. Failure to produce
										the confirmation voucher may result in the hotel not honoring your reservation unless the hotel is able to
										trace & match the excess in the reservation system.
									</p>
									<p className="mb-0 fs-6 lh-base ">
										<ul>
											<li className="mb-2">
												The Reservation & Cancellation policy will be applicable as per Insignia Hotels & Resort’s policy.
											</li>
											<li className="mb-2">These terms and conditions are valid till further notice.</li>
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
