import { Component } from 'react';

import { ControlRow, Selector, Spin } from '../../controls';
import { Note } from '../../enums/note';
import { adjustNote, getNotesInChord } from '../../logic/logic';
import { ChordModel, chords } from '../../models/chord-model';
import { InstrumentModel, instruments } from '../../models/instrument-model';

import { Instrument } from '../instrument/instrument';

import './fretboard.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

interface State {
	root: Note;
	chord: ChordModel;
	instrument: InstrumentModel;
}

export class Fretboard extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			root: Note.C,
			chord: chords[0],
			instrument: instruments[0]
		}
	}

	nudgeRoot = (delta: number) => {
		const root = adjustNote(this.state.root, delta);
		this.setState({
			root: root
		});
	};

	setChord = (name: string) => {
		const chord = chords.find(c => c.name === name);
		if (chord) {
			this.setState({
				chord: chord
			});
		}
	};

	setInstrument = (name: string) => {
		const instrument = instruments.find(i => i.name === name);
		if (instrument) {
			this.setState({
				instrument: instrument
			});
		}
	};

	public render = () => {
		const chordOptions = chords.map(c => ({ id: c.name, display: c.name }));
		const instrumentOptions = instruments.map(i => ({ id: i.name, display: i.name }));

		const notes = getNotesInChord(this.state.chord, this.state.root);

		return (
			<div className='fretboard'>
				<div className='controls'>
					<ControlRow label='Root note'>
						<Spin value={this.state.root} nudge={this.nudgeRoot} />
					</ControlRow>
					<ControlRow label='Chord'>
						<Selector options={chordOptions} selectedID={this.state.chord.name} select={this.setChord} />
					</ControlRow>
					<hr />
					<ControlRow label='Chord'>
						<div><b>{ `${this.state.root}${this.state.chord.suffix}` }</b></div>
					</ControlRow>
					<ControlRow label='Notes'>
						<div>{ notes.join(', ') }</div>
					</ControlRow>
					<hr />
					<ControlRow label='Instrument'>
						<Selector options={instrumentOptions} selectedID={this.state.instrument.name} select={this.setInstrument} />
					</ControlRow>
				</div>
				<Instrument instrument={this.state.instrument} highlight={notes} root={this.state.root} />
			</div>
		);
	}
}
