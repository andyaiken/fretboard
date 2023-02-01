import { Component } from 'react';

import { Note } from '../../enums/note';
import { adjustNote } from '../../logic/logic';

import { FretMarker } from '../fret-marker/fret-marker';

import './instrument-string.scss';

interface Props {
	tuning: Note;
	highlight: Note[];
	root: Note;
}

export class InstrumentString extends Component<Props> {
	public render = () => {
		const frets = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ].map(n => {
			const note = adjustNote(this.props.tuning, n);
			const className = `fret fret-${n}`;

			let content = null;
			if (this.props.highlight.includes(note)) {
				content = (
					<FretMarker
						fret={n}
						note={note}
						root={this.props.root}
						string={this.props.tuning}
					/>
				);
			}

			return (
				<div key={n} className={className}>
					{ content }
				</div>
			);
		});

		return (
			<div className='instrument-string'>
				<div className='tuning'>{this.props.tuning}</div>
				<div className='string'>
					{ frets }
				</div>
			</div>
		);
	}
}
