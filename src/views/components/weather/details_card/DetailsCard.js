import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ContentWrapper from '../../content_wrapper';

import {weatherSelectors} from '../../../../redux/selectors';

import './DetailsCard.scss';

const CLASS = 'wa-DetailsCard';

class DetailsCard extends Component {
	static propTypes = {
		data: PropTypes.object,
	};

	static defaultProps = {
		data: null,
	};

	renderData = () => {
		const {
			data: {humidity, uv, vis_km, pressure_mb},
		} = this.props;

		return (
			<React.Fragment>
				<div className={`${CLASS}-top`}>
					<span>
						<span>{humidity}%</span>
						<br />
						<span>Humidity</span>
					</span>
					<span>
						<span>{pressure_mb} mb</span>
						<br />
						<span>Pressure</span>
					</span>
				</div>

				<div className={`${CLASS}-bottom`}>
					<span>
						<span>{uv}/10</span>
						<br />
						<span>UV Index</span>
					</span>
					<span>
						<span>{vis_km} km</span>
						<br />
						<span>Visibility</span>
					</span>
				</div>
			</React.Fragment>
		);
	};

	render() {
		return <ContentWrapper className={CLASS}>{this.renderData()}</ContentWrapper>;
	}
}

const mapStateToProps = state => ({
	data: weatherSelectors.getCurrentData(state),
});

export default connect(
	mapStateToProps,
	null
)(DetailsCard);
