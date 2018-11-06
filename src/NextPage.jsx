import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import FeatherIcon from 'feather-icons-react';

export class NextPage extends Component {
	render() {
		const { text, href } = this.props;

		return (
			<div className="NextPage">
				<AnchorLink offset="0" href={href}>
					<div className="NextPage-title">{ text }</div>
					<FeatherIcon icon="arrow-down" className="NextPage-icon" />
				</AnchorLink>
			</div>
		);
	}
}

export default NextPage;
