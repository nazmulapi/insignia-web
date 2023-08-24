import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes as PathWays, Route, useLocation } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';

// pages
import Home from '../pages/Home';
import RestaurantReservation from '../pages/RestaurantReservation';
import Conference from '../pages/Conference';
import Wedding from '../pages/Wedding';
import Seminar from '../pages/Seminar';
import Banquet from '../pages/Banquet';
import Terms from '../pages/Terms';
import Refund from '../pages/Refund';
import Privacy from '../pages/Privacy';
import HotelResortPolicy from '../pages/HotelResortPolicy';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Routes = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	React.useEffect(() => {
		setTimeout(() => {
			dispatch({
				type: 'SIDEBAR_TOGGLE',
				payload: false,
			});
		}, 100);
	}, [location, dispatch]);
	return (
		<>
			<PathWays>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<About />} />
				<Route path="/restaurant-reservation" element={<RestaurantReservation />} />
				<Route path="/conference" element={<Conference />} />
				<Route path="/wedding" element={<Wedding />} />
				<Route path="/seminar" element={<Seminar />} />
				<Route path="/banquet" element={<Banquet />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/refund" element={<Refund />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/hotel-resort-policy" element={<HotelResortPolicy />} />
				{/* <Route path="/private" element={<ProtectedRoute isAuth={true} redirectTo="/login" />}>
					<Route path="" element={<Home />} />
				</Route> */}
				<Route path="*" element={<NotFound />} />
			</PathWays>
		</>
	);
};
export default Routes;
