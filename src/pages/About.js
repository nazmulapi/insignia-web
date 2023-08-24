import React from 'react';
import PagerBannerForRestaurantReservation from '../components/PageBanner/PagerBannerForRestaurantReservation';
import Footer from '../components/Footer/Footer';
import img from '../assets/img/ins-1.JPG';

const About = () => {
	return (
		<>
			<PagerBannerForRestaurantReservation minusTop={true} title="About Us" background={img} />
			<div className="about-us py-5">
				<div className="container py-5">
					<div className="about-content text-light mb-5">
						<h3 className="fs-5 lh-base fw-normal">
							<img className="img-fluid shape-outside me-4 mb-3" src={img} alt="beachResort" />
							We are Insignia...a boutique hotel & a resort! Great place to spend time with kids, family & friends. It's a
							wheelchair-accessible property, therefore no worries, you do not have to leave behind anyone! The main pool has a jacuzzi
							and a kid's wading pool. A playpen for toddlers right next to the pool so that mothers can have a dip and keep an eye on
							their precious ones, at the same time! A multi-cuisine restaurant right next to the pool to satisfy your culinary demands.
							There's a Sports Cafe where your friends and you can shoot some pool, darts, play table tennis, chess, carom. Do some
							putting with the mini-putt. A gym where you can work out to your heart's content. Children can have their chirpy fun time
							at the play area using the swings, seesaws & slides! There's a natural grass futsal field where you can have 5-a-side
							matches with your opponents and get ecstatic by netting the ball! For corporate events and group daylong hangout, the
							hotel has multiple indoor and outdoor venues with an extensive range of flexible functional space, creative catering
							options and comprehensive audiovisual support. Neatly tucked amid Gazipur industrial belt, the hotel can easily be
							accessed by road from the city or the airport. One can also enjoy a drive through the highway leading to the Hotel and
							make use of the available complimentary car parking area. Property is 9.6 km, about 30-40 minutes from Hazrat Shahjalal
							International Airport. The Hotel & Resort is owned by Chowdhury Group. The resort has started the journey since 2021.
						</h3>
					</div>
					{/* <div class="management-team text-light pt-4">
						<h2 class="text-uppercase text-center display-4 text-letter-spacing-xs my-0 text-light font-weight-bold">
							Management <i class="ion-ios-body pl-1 text-primary op-8 z-index-1"></i>
						</h2>
						<hr class="hr-primary w-15 hr-xl ml-0 mb-5" />
						<div class="row align-items-center mb-5">
							<div class="col-md-6 order-md-2">
								<img
									src="https://bootdey.com/img/Content/avatar/avatar1.png"
									alt="Personal Trainer 1"
									class="img-fluid border-white border-w-5 w-50 w-md-80 w-lg-60 rounded-circle"
								/>
							</div>
							<div class="col-md-6 flex-valign text-md-end">
								<h3 class="text-uppercase text-letter-spacing-xs mt-0 mb-1 text-light ">Mike Jones</h3>
								<h5 class="my-0 font-weight-normal">
									<em>Strength Coach</em>
								</h5>
								<hr class="hr-primary w-70 ml-0 ml-md-auto mr-md-0 mb-3" />
								<p>
									Aptent dolore enim facilisi humo magna melior nisl occuro. Ad os sed utinam. Accumsan autem brevitas esse exerci
									ludus ratis.
								</p>
								<p>Adipiscing nimis sed tego turpis. Abico genitus quadrum qui singularis te.</p>
							</div>
						</div>
						<div class="row align-items-center mb-5">
							<div class="col-md-6 text-md-end">
								<img
									src="https://bootdey.com/img/Content/avatar/avatar6.png"
									alt="Personal Trainer 2"
									class="img-fluid border-white border-w-5 w-50 w-md-80 w-lg-60 rounded-circle"
								/>
							</div>
							<div class="col-md-6 flex-valign">
								<h3 class="text-uppercase text-letter-spacing-xs mt-0 mb-1 text-light font-weight-bold">Kim Kirk</h3>
								<h5 class="my-0 font-weight-normal">
									<em>Prenatal Specialist</em>
								</h5>
								<hr class="hr-primary w-70 ml-0 mb-3" />
								<p>
									Commoveo gilvus iaceo nutus pagus tincidunt. Eligo nutus proprius saluto vulputate. Brevitas eligo et fere quadrum
									quae ratis.
								</p>
								<p>
									Eum pecus quis. Accumsan genitus humo inhibeo ut vel. Augue bene enim gemino ideo ille luptatum os veniam venio.
								</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
