import { Note } from '../enums/note';

export type VoiceType = 'Major' | 'Minor';
export type DominantType = 'None' | '6' | '7' | '9';
export type AddType = 'None' | '9';

export class ChordModel {
	name: string;
	suffix: string;
	notes: Note[];

	constructor(name: string, suffix: string, notes: Note[]) {
		this.name = name;
		this.suffix = suffix;
		this.notes = notes;
	}
}

const chords: ChordModel[] = [
	new ChordModel('Major', '', [ Note.C, Note.E, Note.G ]),
	new ChordModel('Minor', 'm', [ Note.C, Note.DSharp, Note.G ]),
	new ChordModel('7th', '7', [ Note.C, Note.E, Note.G, Note.ASharp ]),
	new ChordModel('Minor 7th', 'm7', [ Note.C, Note.DSharp, Note.G, Note.ASharp ]),
	new ChordModel('Major 7th', 'maj7', [ Note.C, Note.E, Note.G, Note.B ]),
	new ChordModel('Minor 7th Flat 5th', 'm7b5', [ Note.C, Note.DSharp, Note.FSharp, Note.ASharp ]),
	new ChordModel('Suspended 2nd', 'sus2', [ Note.C, Note.D, Note.G ]),
	new ChordModel('Suspended 4th', 'sus4', [ Note.C, Note.F, Note.G ]),
	new ChordModel('Augmented', 'aug', [ Note.C, Note.E, Note.GSharp ]),
	new ChordModel('Diminished', 'dim', [ Note.C, Note.DSharp, Note.FSharp ]),
	new ChordModel('5th', '5', [ Note.C, Note.G ]),
	new ChordModel('6th', '6', [ Note.C, Note.E, Note.G, Note.A ]),
	new ChordModel('Minor 6th', 'm6', [ Note.C, Note.DSharp, Note.G, Note.A ]),
	new ChordModel('6th add 9th', '6add9', [ Note.C, Note.E, Note.G, Note.A, Note.D ]),
	new ChordModel('9th', '9', [ Note.C, Note.E, Note.G, Note.ASharp, Note.D ]),
	new ChordModel('Minor 9th', 'm9', [ Note.C, Note.DSharp, Note.G, Note.ASharp, Note.D ]),
	new ChordModel('Major 9th', 'maj9', [ Note.C, Note.E, Note.G, Note.B, Note.D ])
];

export { chords };
