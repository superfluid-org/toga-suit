/* global BigInt */
import { utils } from 'ethers';
import memoizee from 'memoizee';

const SECONDS_IN_A_DAY = 86400;

export function abbreviateAddress(address) {
	if (!address) {
		return '';
	}
	return `${address.substr(0, 6)}...${address.substr(-4)}`;
}

export function getTokenString(token) {
	if (!token) {
		return '';
	}
	return `${!token.isListed ? ' (unlisted) ' : ''}${token.symbol} (${abbreviateAddress(token.id)})`;
}

async function fetchTokenUsd(networkGoinGeckoId, tokenAddress) {
	if (!networkGoinGeckoId) {
		return null;
	}
	const priceUrl = `https://api.coingecko.com/api/v3/simple/token_price/${networkGoinGeckoId}?contract_addresses=${tokenAddress}&vs_currencies=usd`;
	let tokenData;
	try {
		tokenData = await (await fetch(priceUrl)).json();
	} catch (e) {
		console.error('Unable to query CoinGecko API', e);
	}
	const tokenInfo = tokenData && tokenData[tokenAddress];
	if (!tokenInfo) {
		return null;
	}
	return tokenInfo.usd;
}

export const fetchTokenUsdValue = memoizee(fetchTokenUsd, {
	promise: true,
	maxAge: 600000,
});

export function generateTokenMap(tokens) {
	const tokenMap = new Map();
	tokens.forEach((token) => {
		// Normalize key to lowercase to avoid checksum-case mismatches in lookups
		const key = (token.id || '').toLowerCase();
		tokenMap.set(key, {
			id: token.id,
			readable: getTokenString(token),
			symbol: token.symbol,
			decimals: typeof token.decimals === 'number' ? token.decimals : Number(token.decimals),
			isListed: token.isListed,
		});
	});
	return tokenMap;
}

function asBaseUnits(value) {
	if (typeof value === 'bigint') {
		return value;
	}
	if (value == null) {
		return 0n;
	}
	if (typeof value === 'number') {
		if (!Number.isSafeInteger(value)) {
			return null;
		}
		return BigInt(value);
	}
	const text = String(value);
	if (/^-?\d+$/.test(text)) {
		return BigInt(text);
	}
	return null;
}

function roundBaseUnits(amount, decimals, maxFractionDigits) {
	if (decimals <= maxFractionDigits) {
		return amount;
	}
	const factor = 10n ** BigInt(decimals - maxFractionDigits);
	const negative = amount < 0n;
	const abs = negative ? -amount : amount;
	const rounded = ((abs + factor / 2n) / factor) * factor;
	return negative ? -rounded : rounded;
}

function formatBaseUnits(amount, decimals) {
	// Eight fractional digits covers a bond or a daily exit rate without a long tail.
	const rounded = roundBaseUnits(amount, decimals, 8);
	const negative = rounded < 0n;
	const abs = negative ? -rounded : rounded;
	const scale = 10n ** BigInt(decimals);
	const whole = abs / scale;
	const fraction = (abs % scale)
		.toString()
		.padStart(decimals, '0')
		.replace(/0+$/, '');
	const text = fraction ? `${whole}.${fraction}` : `${whole}`;
	return negative ? `-${text}` : text;
}

export function naturalUnitToDailyReadable(perSecond, token) {
	const base = asBaseUnits(perSecond);
	if (base === null) {
		return naturalUnitToReadable(Number(perSecond) * SECONDS_IN_A_DAY, token);
	}
	return naturalUnitToReadable(base * BigInt(SECONDS_IN_A_DAY), token);
}

export function naturalUnitToReadable(naturalUnits, token) {
	if (
		!token ||
		!Number.isInteger(token.decimals) ||
		token.decimals < 0
	) {
		return String(naturalUnits);
	}
	const base = asBaseUnits(naturalUnits);
	const formatted =
		base === null
			? fromNaturalUnit(naturalUnits, token)
			: formatBaseUnits(base, token.decimals);
	return formatted + ' ' + token.symbol;
}

export function fromNaturalUnit(naturalUnits, token) {
	if (!token || typeof token.decimals !== 'number' || Number.isNaN(token.decimals)) {
		return Number(naturalUnits);
	}
	return parseFloat((naturalUnits / 10 ** token.decimals).toFixed(7));
}

export function toNaturalUnit(naturalUnits, token) {
	if (!token || typeof token.decimals !== 'number' || Number.isNaN(token.decimals)) {
		// eslint-disable-next-line no-undef
		return BigInt(Math.round(Number(naturalUnits)));
	}
	// eslint-disable-next-line no-undef
	return BigInt(Math.round(naturalUnits * 10 ** token.decimals));
}

export function encodeToNaturalUnitsFromDaily(amount, token) {
	return encodeToNaturalUnits(amount / SECONDS_IN_A_DAY, token);
}

export function encodeToNaturalUnits(amount, token) {
	return amount !== undefined
		? utils.defaultAbiCoder.encode(
				['int96'],
				[toNaturalUnit(amount, token)],
		  )
		: '0x';
}
