import React from 'react';
import PropTypes from 'prop-types';

const CLASS = 'wa-Icon';

const Icon = props => {
	const {icon: Type, ...rest} = props;
	return (
		<div className={`${CLASS}`}>
			<Type {...rest} />
		</div>
	);
};

Icon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]).isRequired,
};

Icon.defaultProps = {
	className: '',
};

export default Icon;
