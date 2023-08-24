import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselSlide.scss';
import resortImg1 from '../../assets/img/ins-1.JPG';
// import resortImg2 from '../../assets/img/ins-3.jpg';
import resortImg3 from '../../assets/img/ins-4.JPG';
import resortImg4 from '../../assets/img/ins-5.JPG';

const CarouselSlide = () => {
	return (
		<>
			<div id="CarouselSlide" className="position-relative">
				<Carousel fade={true} controls={false} pause={false} interval={2500} indicators={false}>
					<Carousel.Item>
						<img className="carousel-item-img d-block w-100" src={resortImg1} alt="Second slide" />
						<Carousel.Caption>
							<div className="caption-content">
								<h1 className="display-2 caption-title mb-4 lh-0">
									Outdoor <br className="d-none d-xl-inline" /> Swimming Pool
								</h1>
								<p className="fs-4 caption-desc">The Hotel includes a playground for kids.</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="carousel-item-img d-block w-100" src={resortImg3} alt="Second slide" />
						<Carousel.Caption>
							<div className="caption-content">
								<h1 className="display-2 caption-title mb-4 lh-0">
									Health Club
									<br className="d-none d-xl-inline" />
								</h1>
								<p className="fs-4 caption-desc">Keep your fitness goals on track even during holidays!</p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img className="carousel-item-img d-block w-100" src={resortImg4} alt="Second slide" />
						<Carousel.Caption>
							<div className="caption-content">
								<h1 className="display-2 caption-title mb-4 lh-0">
									Rooms
									<br className="d-none d-xl-inline" />
								</h1>
								<p className="fs-4 caption-desc"> Amenities Offered with the Rooms. </p>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};

export default CarouselSlide;
