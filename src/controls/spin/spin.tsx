import { Component } from 'react';

import './spin.scss';

interface Props {
	value: string | JSX.Element;
	nudge: (delta: number) => void;
}

export class Spin extends Component<Props> {
	public render = () => {
		return (
			<div className='spin'>
				<div className='spin-btn' onClick={() => this.props.nudge(-1)}>-</div>
				<div className='spin-value'>{ this.props.value }</div>
				<div className='spin-btn' onClick={() => this.props.nudge(+1)}>+</div>
			</div>
		);
	}
}
