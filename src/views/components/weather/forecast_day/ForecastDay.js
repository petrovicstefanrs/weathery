import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import Icon from '../../icon';

import FA from '../../../../lib/font_awesome';
import {WEATHER_CODE_TO_ICO} from '../../../../lib/icons_lib';
import {toWeekdayName} from '../../../../util/date';

import './ForecastDay.scss';

const CLASS = 'wa-ForecastDay';

class ForecastDay extends Component {
	static propTypes = {
		data: PropTypes.object,
	};

	static defaultProps = {
		data: null,
	};

	renderData = () => {
		const {
			data: {
				day: {
					avgtemp_c,
					condition: {code},
				},
				date,
			},
		} = this.props;

		return (
			<React.Fragment>
				<Icon className={`${CLASS}-icon`} icon={WEATHER_CODE_TO_ICO[code]} />
				<span className={`${CLASS}-temp`}>
					{avgtemp_c}
					<FontAwesome name={FA.circle} />
				</span>
				<span className={`${CLASS}-day`}>{toWeekdayName(date)}</span>
			</React.Fragment>
		);
	};

	render() {
		return <div className={CLASS}>{this.renderData()}</div>;
	}
}

export default ForecastDay;
