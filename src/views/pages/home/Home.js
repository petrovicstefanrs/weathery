import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Spinner from '../../components/spinner';
import ConditionCard from '../../components/weather/condition_card';
import DetailsCard from '../../components/weather/details_card';
import ForecastCard from '../../components/weather/forecast_card';
import Header from '../../components/header';
import Footer from '../../components/footer';

import {unsplashActions} from '../../../redux/actions';
import {weatherActions} from '../../../redux/actions';
import {weatherSelectors} from '../../../redux/selectors';

import './Home.scss';

const CLASS = 'wa-Home';

class Home extends Component {
	static propTypes = {
		error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
		data: PropTypes.object,
		getWeather: PropTypes.func.isRequired,
		getImage: PropTypes.func.isRequired,
	};

	static defaultProps = {
		error: null,
		data: null,
	};

	componentDidMount() {
		const {getWeather, getImage} = this.props;

		getWeather();
		getImage();
	}

	renderAppOrSpinner = () => {
		const {data} = this.props;

		if (!data) {
			return <Spinner />;
		}

		return this.renderHome();
	};

	renderHome = () => {
		return (
			<div className={CLASS}>

				<div className={`${CLASS}-header`}>
					<Header />
				</div>
				<div className={`${CLASS}-body`}>
					<div className={`${CLASS}-body-left`}>
						<ConditionCard />
						<DetailsCard />
					</div>
					<div className={`${CLASS}-body-right`}>
						<ForecastCard />
					</div>
				</div>
				<div className={`${CLASS}-footer`}>
					<Footer />
				</div>

			</div>
		);
	};

	render() {
		return <React.Fragment>{this.renderAppOrSpinner()}</React.Fragment>;
	}
}

const mapStateToProps = state => ({
	error: weatherSelectors.hasError(state),
	data: weatherSelectors.getData(state),
});

const mapDispatchToProps = {
	getWeather: weatherActions.getWeather,
	getImage: unsplashActions.getRandomPhoto,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
