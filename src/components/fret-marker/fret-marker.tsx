import { Component } from 'react';

import { Note } from '../../enums/note';

import './fret-marker.scss';

interface Props {
	fret: number;
	note: Note;
	root: Note;
	string: Note;
}

export class FretMarker extends Component<Props> {
	public render = () => {
		const markerClassName = `fret-marker ${this.props.note === this.props.root ? 'is-root' : ''}`;
		const fret = (this.props.fret === 0) ? 'open' : `fret ${this.props.fret}`;
		const title = `${this.props.string} string, ${fret}, ${this.props.note}`;

		return (
			<div className={markerClassName} title={title}>
				{ this.props.fret }
			</div>
		);
	};
}
