import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import NotFound from '../../pages/not-found';
import Home from '../../pages/home';

import AuthRoute from '../auth-route';
import Spinner from '../../components/spinner';

import * as routes from '../util/routes';
import {initActions} from '../../../redux/actions';
import {initSelectors} from '../../../redux/selectors';

class RootRouter extends Component {
	static propTypes = {
		initApp: PropTypes.func.isRequired,
		isInitialized: PropTypes.bool.isRequired,
		isLoading: PropTypes.bool,
	};

	componentDidMount() {
		this.initializeApp();
	}

	initializeApp = () => {
		const {isInitialized, initApp} = this.props;

		!isInitialized && initApp();
	};

	renderAppOrSpinner = () => {
		const {isInitialized, isLoading} = this.props;

		if (!isInitialized || isLoading) {
			return <Spinner />;
		}

		return (
			<Switch>
				<AuthRoute exact name="Home" path={routes.HOME} component={Home} />
				<AuthRoute name="Not found" path="*" component={NotFound} />
			</Switch>
		);
	}

	render() {
		return <React.Fragment>{this.renderAppOrSpinner()}</React.Fragment>;
	}
}

const mapStateToProps = state => ({
	isInitialized: initSelectors.isInitialized(state),
	isLoading: initSelectors.isLoading(state),
});

const mapDispatchToProps = {
	initApp: initActions.initApp,
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(RootRouter)
);
