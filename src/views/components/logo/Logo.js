import React from 'react';

import './Logo.scss';

const CLASS = 'wa-Logo';

const Logo = () => (
	<div className={CLASS}>
		<span className={`${CLASS}-circle`} />
		<span className={`${CLASS}-circle`} />
		<span className={`${CLASS}-circle`} />
		<span className={`${CLASS}-name`}>Weathery</span>
	</div>
);

export default Logo;
