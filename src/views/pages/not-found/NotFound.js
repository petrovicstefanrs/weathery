import React from 'react';

import ContentWrapper from '../../components/content_wrapper/ContentWrapper';

import './NotFound.scss';

const CLASS = 'wa-NotFound';

const NotFound = () => (
	<ContentWrapper className={CLASS}>
		404 Not Found
	</ContentWrapper>
);

export default NotFound;
