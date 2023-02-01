import { Component } from 'react';

import './control-row.scss';

interface Props {
	label: string | JSX.Element;
	children: JSX.Element;
}

export class ControlRow extends Component<Props> {
	public render = () => {
		return (
			<div className='control-row'>
				<div className='control-row-label'>{ this.props.label }</div>
				<div className='control-row-content'>{ this.props.children }</div>
			</div>
		);
	}
}
