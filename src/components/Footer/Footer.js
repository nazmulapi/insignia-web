import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { SocialIcon } from 'react-social-icons';
import logo from '../../assets/img/insignia.png';
import banner from '../../assets/img/insignia-9.JPG';
import logoText from '../../assets/img/insignia-text.png';
import payment from '../../assets/img/payment.png';
import './Footer.scss';

const Footer = () => {
	const style = {
		backgroundColor: 'rgba(0,0,0,.75)',
		backgroundImage: `url(${banner})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover, 200px',
		backgroundPosition: 'bottom , center calc(100% - 50px)',
		backgroundBlendMode: 'overlay',
	};

	return (
		<>
			<footer className="footer" style={style}>
				<div className="footer-top">
					<div className="container">
						<div className="row justify-content-around">
							<div className="col-xl-4">
								<div className="footer-widget text-dark mb-4">
									<Link to="/" className="footer-title footer-logo d-inline-block display-4 mb-4">
										<img src={logoText} alt="logo" className="img-fluid" style={{ maxWidth: '150px' }} />
									</Link>
									<p className="mb-2 fs-6 lh-base footer-desc">
										Insignia...a boutique hotel & resort! An urban getaway! Great place to spend time <br /> with kids, family &
										friends.
									</p>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="footer-widget text-dark mb-4">
									<h3 className="footer-title text-success fs-4 font-monospace mb-4">About & Terms</h3>
									<ul className="mb-0 px-0 list-unstyled footer-widget-links mb-4">
										<li className="mb-2">
											<Link to="/about-us">About Us</Link>
										</li>
										<li className="mb-2">
											<Link to="/contact">Get In Touch</Link>
										</li>

										<li className="mb-2">
											<Link to="/terms">Terms & Condition</Link>
										</li>
										<li className="mb-2">
											<Link to="/privacy">Privacy Policy</Link>
										</li>
										<li className="mb-2">
											<Link to="/refund">Refund Policy</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3">
								<div className="footer-widget text-dark mb-4">
									<h3 className="footer-title text-success fs-4 font-monospace mb-4">Contact Us</h3>
									<p className="mb-2 lh-base footer-desc">
										23/Ka, Rashed Khan Menon Road (New Easkaton Road), Dhaka, <br /> PO: 1000
									</p>
									<p className="mb-4 fs-6 lh-base footer-desc">BIN : 004200661-0102</p>
									<ul className="mb-0 px-0 list-unstyled footer-widget-links">
										<li className="mb-2">
											<Link to="/">
												<FaPhone /> &nbsp; +88 09612-788788
											</Link>
										</li>
										<li className="mb-2">
											<Link to="/">
												<BiSupport /> &nbsp; reservation@insignia-resorts.net
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom pt-1 pb-2 mt-1">
					<div className="container">
						<div className="d-lg-flex flex-wrap gap-5 align-items-center justify-content-lg-around mb-3">
							<p className="mb-3 mb-lg-0 fs-6 font-monospace text-white">©2022 All rights reserved.</p>
							<img src={logo} alt="logo" className="img-fluid mb-4 mb-lg-0" style={{ maxWidth: '135px' }} />
							<div className="social-networks d-flex flex-wrap gap-2 justify-content-lg-end">
								<SocialIcon url="#" network="facebook" fgColor="#fff" />
								<SocialIcon url="#" network="youtube" fgColor="#fff" />
								<SocialIcon url="#" network="twitter" fgColor="#fff" />
								<SocialIcon url="#" network="pinterest" fgColor="#fff" />
							</div>
						</div>
						<div className="payment-methods-accept text-center">
							<img src={payment} alt="img" className="img-fluid d-inline-block" />
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
