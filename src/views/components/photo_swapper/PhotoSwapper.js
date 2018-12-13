import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import posed from 'react-pose';

import ContentWrapper from '../content_wrapper';

import {unsplashSelectors} from '../../../redux/selectors';

import './PhotoSwapper.scss';

const CLASS = 'wa-PhotoSwapper';

const FadeImg = posed.img({
	visible: {
		opacity: 1,
	},
	hidden: {
		opacity: 0,
	},
});

class PhotoSwapper extends Component {
	static propTypes = {
		previousPhoto: PropTypes.string,
		currentPhoto: PropTypes.string,
		isLoading: PropTypes.bool,
	};

	static defaultProps = {
		isLoading: false,
	};

	constructor(props) {
		super(props);

		this.state = {
			renderNext: false,
			currentPhoto: props.currentPhoto,
			previousPhoto: props.previousPhoto,
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currentPhoto !== this.props.currentPhoto) {
			this.setState({
				renderNext: true,
				currentPhoto: this.props.currentPhoto,
				previousPhoto: this.props.previousPhoto,
			});
		}
	}

	handlePoseComplete = () => {
		this.setState({
			renderNext: false,
			previousPhoto: this.state.currentPhoto,
		});
	};

	renderPhoto = () => {
		const {previousPhoto, currentPhoto, renderNext} = this.state;

		return (
			<React.Fragment>
				{previousPhoto && (
					<img src={previousPhoto} className={`${CLASS}-photo`} alt="nature landscape" />
				)}
				<FadeImg
					pose={renderNext ? 'visible' : 'hidden'}
					onPoseComplete={this.handlePoseComplete}
					src={currentPhoto}
					className={`${CLASS}-photo`}
					alt="nature landscape"
				/>
			</React.Fragment>
		);
	};

	handleRefresh = () => {
		const {updateWeather} = this.props;

		updateWeather();
	};

	render() {
		return <ContentWrapper className={CLASS}>{this.renderPhoto()}</ContentWrapper>;
	}
}

const mapStateToProps = state => ({
	isLoading: unsplashSelectors.isLoading(state),
	currentPhoto: unsplashSelectors.getCurrentPhoto(state),
	previousPhoto: unsplashSelectors.getPreviousPhoto(state),
});

export default connect(
	mapStateToProps,
	null
)(PhotoSwapper);
