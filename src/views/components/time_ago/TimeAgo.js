import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {toHumanReadable} from '../../../util/date';

import './TimeAgo.scss';

const CLASS = 'wa-TimeAgo';

class TimeAgo extends Component {
	static propTypes = {
		time: PropTypes.number.isRequired,
	};

	componentDidMount() {
		this.updateInterval = setInterval(() => this.trackUpdate(), 1000 * 60);
	}

	componentWillUnmount() {
		clearInterval(this.updateInterval);
	}

	trackUpdate = () => {
		this.forceUpdate();
	};

	render() {
		const {time} = this.props;

		return <span className={CLASS}>{toHumanReadable(time)}</span>;
	}
}

export default TimeAgo;
