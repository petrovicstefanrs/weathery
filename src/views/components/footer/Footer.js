import React from 'react';
import {connect} from 'react-redux';

import ContentWrapper from '../content_wrapper';

import {unsplashSelectors} from '../../../redux/selectors';

import './Footer.scss';

const CLASS = 'wa-Footer';

const Footer = ({author}) => {
	if (!author) {
		return null;
	}

	const {
		name,
		links: {html: profileUrl},
	} = author;

	return (
		<ContentWrapper className={CLASS}>
			<span>
				Photo by{' '}
				<a href={profileUrl} target="_blank" rel="noopener noreferrer">
					{name}
				</a>{' '}
				on{' '}
				<a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">
					Unsplash
				</a>
			</span>
		</ContentWrapper>
	);
};

const mapStateToProps = state => ({
	author: unsplashSelectors.getAuthor(state),
});

export default connect(
	mapStateToProps,
	null
)(Footer);
