import React from 'react';
import PropTypes from 'prop-types';

import './ContentWrapper.scss';

const CLASS = 'wa-ContentWrapper';

export const ContentWrapper = ({className, children}) => {
	return <div className={`${CLASS} ${className}`}>{children}</div>;
};

ContentWrapper.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

ContentWrapper.defaultProps = {
	className: '',
};

export default ContentWrapper;
