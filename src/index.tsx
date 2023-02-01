import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { Fretboard } from './components/fretboard/fretboard';

import './index.scss';

const root = document.getElementById('root');
if (root) {
	ReactDOM.createRoot(root).render(
		<StrictMode>
			<Fretboard />
		</StrictMode>
	);
}
