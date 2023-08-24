import React from 'react';
import './AboutUs.scss';
import resortImg1 from '../../assets/img/ins-5.JPG';

const AboutUs = () => {
	return (
		<>
			<div id="about-us" className="py-5 pb-2 text-light">
				<div className="container py-5 pb-0">
					<div className="section-header text-center mb-5">
						<h1 className="display-1"> About Us </h1>
					</div>
					<div className="row text-center">
						<div className="col-xl-11 mx-auto">
							<div className="about-content">
								<h3 className="fs-5 lh-base fw-normal">
									<img className="img-fluid shape-outside me-4 mb-3" src={resortImg1} alt="beachResort" />
									We are Insignia...a boutique hotel & a resort! Great place to spend time with kids, family & friends. It's a
									wheelchair-accessible property, therefore no worries, you do not have to leave behind anyone! The main pool has a
									jacuzzi and a kid's wading pool. A playpen for toddlers right next to the pool so that mothers can have a dip and
									keep an eye on their precious ones, at the same time! A multi-cuisine restaurant right next to the pool to satisfy
									your culinary demands. There's a Sports Cafe where your friends and you can shoot some pool, darts, play table
									tennis, chess, carom. Do some putting with the mini-putt. A gym where you can work out to your heart's content.
									Children can have their chirpy fun time at the play area using the swings, seesaws & slides! There's a natural
									grass futsal field where you can have 5-a-side matches with your opponents and get ecstatic by netting the ball!
									For corporate events and group daylong hangout, the hotel has multiple indoor and outdoor venues with an extensive
									range of flexible functional space, creative catering options and comprehensive audiovisual support. Neatly tucked
									amid Gazipur industrial belt, the hotel can easily be accessed by road from the city or the airport. One can also
									enjoy a drive through the highway leading to the Hotel and make use of the available complimentary car parking
									area. Property is 9.6 km, about 30-40 minutes from Hazrat Shahjalal International Airport. The Hotel & Resort is
									owned by Chowdhury Group. The resort has started the journey since 2021.
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
