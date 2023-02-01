import { Component } from 'react';

import { Note } from '../../enums/note';
import { InstrumentModel } from '../../models/instrument-model';

import { InstrumentString } from '../instrument-string/instrument-string';

import './instrument.scss';

interface Props {
	instrument: InstrumentModel;
	highlight: Note[];
	root: Note;
}

export class Instrument extends Component<Props> {
	public render = () => {
		const strings = this.props.instrument.tunings.map((tuning, index) => {
			return (
				<InstrumentString
					key={index}
					tuning={tuning}
					highlight={this.props.highlight}
					root={this.props.root}
				/>
			);
		});
		return (
			<div className='instrument'>
				{strings}
			</div>
		);
	}
}
