import React from 'react';

import Logo from '../logo';
import ContentWrapper from '../content_wrapper';

import './Header.scss';

const CLASS = 'wa-Header';

const Header = () => (
	<ContentWrapper className={CLASS}>
		<Logo />
	</ContentWrapper>
);

export default Header;
