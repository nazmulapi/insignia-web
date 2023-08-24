import React, { useState } from 'react';
import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import ApplicationHelmet from '../components/ApplicationHelmet/ApplicationHelmet';
import background from '../assets/img/insignia-5.JPEG';
import BookingForm from '../components/BookingForm/BookingForm';

const RestaurantReservation = () => {
	const [isOfflineReservation, setIsOfflineReservation] = useState();
	return (
		<>
			<ApplicationHelmet title="Reservation" description="" />
			<PagerBannerForRestaurantReservation minusTop={true} isOffline={isOfflineReservation} background={background} />
			<BookingForm
				returnBack={(isOffline) => {
					setIsOfflineReservation(isOffline);
				}}
			/>
		</>
	);
};

export default RestaurantReservation;
