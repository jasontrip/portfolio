import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import FeatherIcon from 'feather-icons-react';

export class NextPage extends Component {
	render() {
		const { text, href } = this.props;

		return (
			<div className="NextPage">
				<Link
					to={href}
					scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
				>
					<div className="NextPage-title">{ text }</div>
					<FeatherIcon icon="arrow-down" className="NextPage-icon" />
				</Link>
			</div>
		);
	}
}

export default NextPage;
