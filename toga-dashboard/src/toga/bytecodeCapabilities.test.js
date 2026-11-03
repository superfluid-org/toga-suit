import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { describe, expect, it } from 'vitest';
import {
	bidMethodFromBytecode,
	scanBytecodeCapabilities,
} from './bytecodeCapabilities.js';

const bytecode = readFileSync(
	join(dirname(fileURLToPath(import.meta.url)), '__fixtures__/gnosis-active-toga-code.hex'),
	'utf8',
).trim();

describe('bytecodeCapabilities', () => {
	it('reads the Gnosis active TOGA as an ERC-777 bid with no custody withdraw', () => {
		const caps = scanBytecodeCapabilities(bytecode);
		expect(caps).toEqual({
			hasTokensReceived: true,
			hasBond: false,
			hasWithdrawFundsInCustody: false,
		});
		expect(bidMethodFromBytecode(bytecode)).toBe('erc777-send');
	});

	it('requires the PUSH opcode, so a bare selector is not a function', () => {
		expect(scanBytecodeCapabilities('0x7e5a8807').hasBond).toBe(false);
		expect(bidMethodFromBytecode(`0x63${'7e5a8807'}`)).toBe('approve-and-bond');
	});

	it('detects custody withdraw from PUSH4', () => {
		expect(
			scanBytecodeCapabilities(`0x63${'6da8d054'}`).hasWithdrawFundsInCustody,
		).toBe(true);
	});

	it('detects tokensReceived as PUSH3 or PUSH4', () => {
		expect(scanBytecodeCapabilities('0x6223de29').hasTokensReceived).toBe(true);
		expect(scanBytecodeCapabilities('0x630023de29').hasTokensReceived).toBe(true);
	});
});
