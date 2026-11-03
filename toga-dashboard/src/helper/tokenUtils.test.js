import { describe, expect, it } from 'vitest';
import { BigNumber } from 'ethers';
import {
	naturalUnitToDailyReadable,
	naturalUnitToReadable,
} from './tokenUtils.js';

const token = { symbol: 'TESTx', decimals: 18 };

describe('token amount display', () => {
	it('formats a 18-decimal BigNumber without floating point', () => {
		const one = BigNumber.from('1000000000000000000');
		expect(naturalUnitToReadable(one, token)).toBe('1 TESTx');
		expect(naturalUnitToReadable(one.add(1), token)).toBe('1 TESTx');
	});

	it('turns a per-second rate into a daily amount in integer arithmetic', () => {
		expect(naturalUnitToDailyReadable(1n, { symbol: 'X', decimals: 0 })).toBe(
			'86400 X',
		);
		const perSecond = BigNumber.from('11574074074074');
		expect(naturalUnitToDailyReadable(perSecond, token)).toBe('1 TESTx');
	});
});
