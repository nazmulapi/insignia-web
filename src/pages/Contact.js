import React from 'react';
import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import Footer from '../components/Footer/Footer';
import ContactUs from '../components/ContactUs/ContactUs';
import img from '../assets/img/ins-1.JPG';

const Contact = () => {
	return (
		<>
			<PagerBannerForRestaurantReservation minusTop={true} title="Get In Touch" background={img} />
			<div className="pt-5">
				<ContactUs />
			</div>
			<Footer />
		</>
	);
};

export default Contact;
