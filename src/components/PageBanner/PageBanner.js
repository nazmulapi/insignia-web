import React from 'react';
import './PageBanner.scss';

const PageBanner = ({ title, background }) => {
	return (
		<>
			<div className="PageBanner">
				<div className="PageBanner-row" style={{ backgroundImage: `url(${background})` }}>
					<div className="PageBanner-content">
						<h1 className="display-3 text-light mb-4 lh-0">{title}</h1>
						<div className="line"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageBanner;
