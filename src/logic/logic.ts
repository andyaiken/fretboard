import { Note } from '../enums/note';
import { ChordModel } from '../models/chord-model';

export const notes = [
	Note.C, Note.CSharp, Note.D, Note.DSharp, Note.E, Note.F, Note.FSharp, Note.G, Note.GSharp, Note.A, Note.ASharp, Note.B
];

export const adjustNote = (note: Note, semitones: number): Note => {
	while (semitones < 0) {
		semitones += 12;
	}
	const index = (notes.indexOf(note) + semitones) % notes.length;
	return notes[index];
};

export const getNotesInChord = (chord: ChordModel, root: Note): Note[] => {
	const diff = notes.indexOf(root) - notes.indexOf(Note.C);
	return chord.notes.map(note => adjustNote(note, diff));
};
