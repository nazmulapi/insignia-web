import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollToLink } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import OutsideClickHandler from 'react-outside-click-handler';
import { GoHome } from 'react-icons/go';
import { BsBookmarks } from 'react-icons/bs';
import { TiContacts } from 'react-icons/ti';
import { RiGalleryFill, RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdEventNote } from 'react-icons/md';
import logo from '../../assets/img/insignia.png';
import './Navigation.scss';

const Navigation = () => {
	const dispatch = useDispatch();

	/**
	 * @method {useSelector}
	 * @param  {} => reduxStore
	 * To get the global redux store
	 */
	const isSidebarToggle = useSelector((reduxStore) => reduxStore?.userReducer?.isSidebarToggle);

	/**
	 * @method sidebarToggleHandler
	 * @param  {} => event
	 */
	const sidebarToggleHandler = () => {
		dispatch({
			type: 'SIDEBAR_TOGGLE',
			payload: !isSidebarToggle,
		});
	};

	return (
		<>
			<OutsideClickHandler
				onOutsideClick={() => {
					isSidebarToggle === true && sidebarToggleHandler();
				}}
			>
				<nav id="navigation" className={`p-3 pt-2 px-1 d-flex flex-column justify-content-start ${isSidebarToggle ? 'collapsed' : ''}`}>
					<button onClick={sidebarToggleHandler} type="button" className="btn shadow btn-sidebar-toggle btn-light rounded-circle position-absolute end-0">
						{isSidebarToggle ? <RiCloseLine size="1.3rem" /> : <HiOutlineMenuAlt4 size="1.3rem" />}
					</button>
					<Link to={'/'} className="logo p-3 pb-2 mb-0">
						<img src={logo} alt="logo" className="img-fluid" style={{ height: '150px' }} />
					</Link>
					<Nav className="flex-column align-items-start">
						<Nav.Link as={NavLink} to={'/'}>
							<GoHome size={'1.1rem'} /> Home
						</Nav.Link>
						{/* <ScrollToLink href="#about-us" to="about-us" activeClass="active" className="nav-link" spy={true} delay={0} smooth={'linear'} duration={400}>
							<GoInfo size={'1.1rem'} /> About Us
						</ScrollToLink> */}
						<ScrollToLink href="#photo-gallery" to="photo-gallery" activeClass="active" className="nav-link" spy={true} delay={0} smooth={'linear'} duration={400}>
							<RiGalleryFill size={'1.1rem'} /> Gallery
						</ScrollToLink>
						{/* <NavDropdown
							title={
								<>
									<FaRestroom size={'1.1rem'} /> Guest Rooms
								</>
							}
						>
							<NavDropdown.Item as={Link} to="#">
								One Bedroom Villa
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="#">
								One Bedroom Suite
							</NavDropdown.Item>
						</NavDropdown> */}
						{/* <ScrollToLink href="#facilities" to="facilities" activeClass="active" className="nav-link" spy={true} delay={0} smooth={'linear'} duration={400}>
							<BsFillDiagram2Fill size={'1.1rem'} /> Facilities
						</ScrollToLink> */}
						
						{/* <Nav.Link as={NavLink} to={'/health-club'}>
							<RiHealthBookFill size={'1.1rem'} /> Health Club
						</Nav.Link> */}
						<a className="nav-link" rel="noreferrer" href={'https://insignia-resorts.com/reservation'}>
							<BsBookmarks size={'1.1rem'} /> Rooms & Reservation
						</a>
						<Nav.Link as={NavLink} to={'/restaurant-reservation'}>
							<BsBookmarks size={'1.1rem'} /> Restaurant Reservation
						</Nav.Link>
						<NavDropdown
							title={
								<>
									<MdEventNote size={'1.1rem'} /> Events
								</>
							}
						>
							<NavDropdown.Item as={Link} to="/wedding">
								Wedding
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/conference">
								Conference
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/seminar">
								Seminar
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/banquet">
								Banquet
							</NavDropdown.Item>
						</NavDropdown>
						<ScrollToLink href="#contact-us" to="contact-us" activeClass="active" className="nav-link" spy={true} delay={0} smooth={'linear'} duration={400}>
							<TiContacts size={'1.1rem'} /> Get In Touch
						</ScrollToLink>
					</Nav>
					<div className="social-networks mt-auto flex-wrap gap-1 p-4 pb-4 d-none d-lg-flex">
						<SocialIcon url="https://facebook.com/" network="facebook" fgColor="#fff" />
						<SocialIcon url="https://youtube.com/" network="youtube" fgColor="#fff" />
						<SocialIcon url="https://twitter.com/" network="twitter" fgColor="#fff" />
						<SocialIcon url="https://pinterest.com/" network="pinterest" fgColor="#fff" />
					</div>
				</nav>
			</OutsideClickHandler>
		</>
	);
};

export default Navigation;
