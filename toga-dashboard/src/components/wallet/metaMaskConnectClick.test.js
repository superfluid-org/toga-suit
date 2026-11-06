// @vitest-environment jsdom
import React from 'react';
import ReactDOM from 'react-dom';
import { Cuer } from 'cuer';
import { describe, expect, it } from 'vitest';

// RainbowKit draws the MetaMask connect QR with cuer. cuer 0.0.3 asks `qr`
// for border 0, and qr 0.7 rejects that during render, which unmounts the app.
describe('MetaMask connect QR', () => {
	it('renders without unmounting the page', () => {
		const root = document.createElement('div');
		document.body.appendChild(root);
		ReactDOM.render(
			React.createElement(
				Cuer.Root,
				{
					errorCorrection: 'medium',
					size: 280,
					value: 'wc:abc@2?relay-protocol=irn&symKey=00',
				},
				React.createElement(Cuer.Cells, { radius: 1 }),
			),
			root,
		);
		expect(root.querySelector('svg')).toBeTruthy();
	});
});
