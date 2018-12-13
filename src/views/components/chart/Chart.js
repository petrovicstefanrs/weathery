import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as ChartSVG} from '../../../assets/illustrations/chart.svg';

import './Chart.scss';

const CLASS = 'wa-Chart';

const Chart = props => {
	return (
		<div className={`${CLASS} ${props.className}`}>
			<ChartSVG {...props} />
		</div>
	);
};

Chart.propTypes = {
	className: PropTypes.string,
};

Chart.defaultProps = {
	className: '',
};

export default Chart;
