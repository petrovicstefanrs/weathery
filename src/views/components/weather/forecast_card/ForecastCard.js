import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContentWrapper from '../../content_wrapper';
import PhotoSwapper from '../../photo_swapper';

import {weatherSelectors} from '../../../../redux/selectors';

import './ForecastCard.scss';
import ForecastDay from '../forecast_day/ForecastDay';
import {toDayMonth} from '../../../../util/date';

const CLASS = 'wa-ForecastCard';

class ForecastCard extends Component {
	static propTypes = {
		data: PropTypes.object,
		locationData: PropTypes.object,
	};

	static defaultProps = {
		data: null,
		locationData: null,
	};

	renderHeader = () => {
		const {
			locationData: {name, country, localtime},
		} = this.props;

		return (
			<div className={`${CLASS}-header`}>
				<span className={`${CLASS}-header-name`}>{name}</span>
				<span className={`${CLASS}-header-sub`}>
					{country} | {toDayMonth(localtime)}
				</span>
			</div>
		);
	};

	renderForecastData = () => {
		const {
			data: {forecastday},
		} = this.props;

		const weekDays = forecastday.map((day, index) => {
			return <ForecastDay key={index} data={day} />;
		});

		return <div className={`${CLASS}-weekdays`}>{weekDays}</div>;
	};

	render() {
		return (
			<ContentWrapper className={CLASS}>
				{this.renderHeader()}
				{this.renderForecastData()}
				<PhotoSwapper />
				<div className={`${CLASS}-overlay`} />
			</ContentWrapper>
		);
	}
}

const mapStateToProps = state => ({
	data: weatherSelectors.getForecastData(state),
	locationData: weatherSelectors.getLocationData(state),
});

export default connect(
	mapStateToProps,
	null
)(ForecastCard);
