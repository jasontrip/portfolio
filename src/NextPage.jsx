import React, { Component } from 'react';
import FeatherIcon from 'feather-icons-react';

export class NextPage extends Component {
	render() {
		const { text } = this.props;

		return (
			<div className="NextPage">
				<div className="NextPage-title">{ text }</div>
				<FeatherIcon icon="arrow-down" className="NextPage-icon" />
			</div>
		);
	}
}

export default NextPage;
