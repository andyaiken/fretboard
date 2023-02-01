import { Note } from '../enums/note';

export class InstrumentModel {
	name: string;
	tunings: Note[];

	constructor(name: string, tunings: Note[]) {
		this.name = name;
		this.tunings = tunings;
	}
}

const instruments: InstrumentModel[] = [
	new InstrumentModel('Guitar', [ Note.E, Note.B, Note.G, Note.D, Note.A, Note.E ]),
	new InstrumentModel('Bass', [ Note.G, Note.D, Note.A, Note.E ]),
	new InstrumentModel('Mandolin', [ Note.E, Note.A, Note.D, Note.G ]),
	new InstrumentModel('Ukulele', [ Note.G, Note.C, Note.E, Note.A ]),
	new InstrumentModel('Banjo', [ Note.D, Note.B, Note.G, Note.D, Note.G ])
];

export { instruments };
