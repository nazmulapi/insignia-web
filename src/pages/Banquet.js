import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import Footer from '../components/Footer/Footer';
import BookingAvailabilityCheck from '../components/BookingForm/BookingAvailabilityCheck';
import img from '../assets/img/ins-1.JPG';


const Meetings = () => {
	return (
		<>
			<PagerBannerForRestaurantReservation minusTop={true} title="Events don't have to feel like time-sucks" background={img} />
			<div className="events py-5">
				<div className="container">
					<div className="section-header text-center mb-5">
						<h1 className="display-1 section-title"> Events </h1>
					</div>
					<div className="events-content">
						<div className="row gx-xl-5 py-5">
							<div className="col-10 col-sm-8 col-lg-6">
								<img
									src={img}
									className="d-block mx-lg-auto img-fluid"
									alt="Bootstrap Themes"
									width="700"
									height="500"
									loading="lazy"
								/>
							</div>
							<div className="col-lg-6 text-light">
								<h1 className="display-5 fw-bold lh-1 mb-5">Discover the best things to do & events in INSIGNIA.</h1>
								{/* <p className="lead">
									A convention, in the sense of a meeting, is a gathering of individuals who meet at an arranged place and time in order to discuss or engage
									in some common interest. The most common conventions are based upon industry, profession, and fandom. Discover the best things to do &
									events in INSIGNIA. explore concerts, meetups, open mics, art shows, music events and a lot more.
								</p> */}
								<BookingAvailabilityCheck eventType={'banquet'} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Meetings;
