import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';

import ContentWrapper from '../../content_wrapper';
import Chart from '../../chart';
import Icon from '../../icon';
import TimeAgo from '../../time_ago';

import {WEATHER_CODE_TO_ICO} from '../../../../lib/icons_lib';
import {weatherActions, unsplashActions} from '../../../../redux/actions';
import {weatherSelectors} from '../../../../redux/selectors';
import FA from '../../../../lib/font_awesome';

import './ConditionCard.scss';

const CLASS = 'wa-ConditionCard';

class ConditionCard extends Component {
	static propTypes = {
		data: PropTypes.object,
		updatedAt: PropTypes.number,
		isRefreshing: PropTypes.bool,
		updateWeather: PropTypes.func.isRequired,
		updateImage: PropTypes.func.isRequired,
	};

	static defaultProps = {
		data: null,
		updatedAt: null,
		isRefreshing: false,
	};

	renderData = () => {
		const {
			data: {condition, temp_c},
		} = this.props;
		const {code, text} = condition;

		return (
			<div className={`${CLASS}-top`}>
				<div className={`${CLASS}-top-current`}>
					<span>
						{temp_c}
						<FontAwesome name={FA.circle} />
					</span>
					<span>{text}</span>
				</div>
				<Icon className={`${CLASS}-top-icon`} icon={WEATHER_CODE_TO_ICO[code]} />
			</div>
		);
	};

	handleRefresh = () => {
		const {updateWeather, updateImage} = this.props;

		updateWeather();
		updateImage();
	};

	renderControls = () => {
		const {updatedAt, isRefreshing} = this.props;

		return (
			<div className={`${CLASS}-bottom`}>
				<FontAwesome spin={isRefreshing} name={FA.refresh} onClick={this.handleRefresh} />
				{updatedAt && (
					<span className={`${CLASS}-bottom-updatedAt`}>
						Updated <TimeAgo time={updatedAt} />
					</span>
				)}
			</div>
		);
	};

	render() {
		return (
			<ContentWrapper className={CLASS}>
				{this.renderData()}
				{this.renderControls()}
				<Chart />
			</ContentWrapper>
		);
	}
}

const mapStateToProps = state => ({
	isRefreshing: weatherSelectors.isLoading(state),
	data: weatherSelectors.getCurrentData(state),
	updatedAt: weatherSelectors.getUpdateTimestamp(state),
});

const mapDispatchToProps = {
	updateWeather: weatherActions.getWeather,
	updateImage: unsplashActions.getRandomPhoto,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ConditionCard);
