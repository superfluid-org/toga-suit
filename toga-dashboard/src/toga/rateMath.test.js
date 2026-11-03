import { describe, expect, it } from 'vitest';
import {
	exitRatePerSecondFromHumanDaily,
	humanAmountToBaseUnits,
	parseStakeAndExitRate,
} from './rateMath.js';

describe('humanAmountToBaseUnits', () => {
	it('converts whole and fractional amounts in integer arithmetic', () => {
		expect(humanAmountToBaseUnits('86400', 0)).toBe(86400n);
		expect(humanAmountToBaseUnits('1.5', 6)).toBe(1500000n);
		expect(humanAmountToBaseUnits('0.1', 18)).toBe(10n ** 17n);
		expect(humanAmountToBaseUnits('', 18)).toBe(0n);
	});

	it('rejects extra precision, junk, and missing decimals', () => {
		expect(() => humanAmountToBaseUnits('1.234', 2)).toThrow(/decimal places/);
		expect(() => humanAmountToBaseUnits('1.2.3', 18)).toThrow(/number/);
		expect(() => humanAmountToBaseUnits('1', undefined)).toThrow(/decimals/);
	});
});

describe('exitRatePerSecondFromHumanDaily', () => {
	it('divides a daily amount by 86400', () => {
		expect(exitRatePerSecondFromHumanDaily('86400', 0)).toBe(1n);
		expect(exitRatePerSecondFromHumanDaily('86400', 18)).toBe(10n ** 18n);
		expect(exitRatePerSecondFromHumanDaily('0', 18)).toBe(0n);
		expect(exitRatePerSecondFromHumanDaily(0, 18)).toBe(0n);
	});

	it('rejects a non-zero daily amount that rounds away', () => {
		expect(() => exitRatePerSecondFromHumanDaily('1', 0)).toThrow(/too small/);
	});
});

describe('parseStakeAndExitRate', () => {
	it('returns the stake and the per-second exit rate', () => {
		expect(parseStakeAndExitRate('2', '86400', 0)).toEqual({
			amount: 2n,
			exitRatePerSecond: 1n,
		});
	});

	it('rejects an empty stake', () => {
		expect(() => parseStakeAndExitRate('', '0', 18)).toThrow(/stake/);
	});
});
