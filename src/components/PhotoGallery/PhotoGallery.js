import React from 'react';
import './PhotoGallery.scss';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import g1 from '../../assets/img/ins-1.JPG';
import g2 from '../../assets/img/gallery/g-2.JPG';
import g3 from '../../assets/img/gallery/g-3.JPG';
import g4 from '../../assets/img/gallery/g-4.JPG';
import g5 from '../../assets/img/gallery/g-5.JPG';
import g6 from '../../assets/img/gallery/g-6.JPG';
import g7 from '../../assets/img/gallery/g-7.JPG';
import g8 from '../../assets/img/gallery/g-8.JPG';
import g11 from '../../assets/img/gallery/g11.JPG';

const PhotoGallery = () => {
	return (
		<SimpleReactLightbox>
			<SRLWrapper>
				<div id='photo-gallery' className="react-photo-gallery py-5 pt-0">
					<div className="container-fluid pb-3">
						<div className="section-header text-center mb-5">
							<h1 className="display-1 section-title"> Photo Gallery </h1>
						</div>
						<ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 768: 2, 991: 3, 1100: 4 }}>
							<Masonry>
								<a href={g2} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g2} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g1} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g1} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g3} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g3} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g5} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g5} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g6} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g6} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g8} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g8} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g7} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g4} alt="" className="img-fluid w-100" />
									</div>
								</a>
								<a href={g11} className="img-widget d-block p-2 border rounded m-1">
									<div className="img-overlay">
										<img src={g11} alt="" className="img-fluid w-100" />
									</div>
								</a>
							</Masonry>
						</ResponsiveMasonry>
					</div>
				</div>
			</SRLWrapper>
		</SimpleReactLightbox>
	);
};

export default PhotoGallery;
