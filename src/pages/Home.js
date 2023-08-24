import React from 'react';
import CarouselSlide from '../components/CarouselSlide/CarouselSlide';
import Facilities from '../components/Facilities/Facilities';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import ApplicationHelmet from './../components/ApplicationHelmet/ApplicationHelmet';
import PhotoGallery from './../components/PhotoGallery/PhotoGallery';
import ContactUs from './../components/ContactUs/ContactUs';
import AboutUs from './../components/AboutUs/AboutUs';
import AvailabilityCheckForRoomReservation from '../components/AvailabilityCheckForRoomReservation/AvailabilityCheckForRoomReservation';

const Home = () => {
	return (
		<>
			<ApplicationHelmet title="Home" description="" />
			<Navigation />
			<CarouselSlide />
			<AvailabilityCheckForRoomReservation className="checkAvailabilityForRoom position-sticky mx-auto" style={{ maxWidth: '600px', marginTop: '-115px', zIndex: '1000', top: '-20px' }} />
			<AboutUs />
			<Facilities />
			<PhotoGallery />
			<ContactUs />
			<Footer />
		</>
	);
};

export default Home;
