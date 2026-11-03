/* global BigInt */

const SECONDS_PER_DAY = 86400n;

export class InputError extends Error {
	constructor(message) {
		super(message);
		this.name = 'InputError';
	}
}

function requireDecimals(decimals) {
	const value = Number(decimals);
	if (!Number.isInteger(value) || value < 0 || value > 36) {
		throw new InputError('Token decimals are missing');
	}
	return value;
}

export function humanAmountToBaseUnits(humanAmount, decimals) {
	const places = requireDecimals(decimals);
	const trimmed = String(humanAmount).trim();
	if (trimmed === '') {
		return 0n;
	}
	if (!/^\d+(\.\d+)?$/.test(trimmed)) {
		throw new InputError('Enter a number');
	}
	const [whole, fraction = ''] = trimmed.split('.');
	if (fraction.length > places) {
		throw new InputError(`Amount has more than ${places} decimal places`);
	}
	const padded = fraction.padEnd(places, '0');
	const digits = `${whole}${padded}`.replace(/^0+/, '') || '0';
	return BigInt(digits);
}

export function exitRatePerSecondFromHumanDaily(humanDaily, decimals) {
	const perDay = humanAmountToBaseUnits(humanDaily, decimals);
	const perSecond = perDay / SECONDS_PER_DAY;
	if (perDay > 0n && perSecond === 0n) {
		throw new InputError(
			'Exit rate per day is too small to stream; enter 0 or a larger rate',
		);
	}
	return perSecond;
}

export function parseStakeAndExitRate(stake, dailyExitRate, decimals) {
	const amount = humanAmountToBaseUnits(stake, decimals);
	if (amount <= 0n) {
		throw new InputError('Enter a stake greater than zero');
	}
	return {
		amount,
		exitRatePerSecond: exitRatePerSecondFromHumanDaily(dailyExitRate, decimals),
	};
}

export function inputErrorText(error, fallback) {
	return error instanceof InputError ? error.message : fallback;
}
