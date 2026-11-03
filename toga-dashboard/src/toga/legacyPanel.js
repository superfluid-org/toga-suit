/* global BigInt */
import { utils } from 'ethers';
import { isLegacyTogaNetwork } from './constants.js';

const CHANGE_EXIT_IFACE = new utils.Interface([
	'function changeExitRate(address token, int96 newExitRate)',
]);
const WITHDRAW_IFACE = new utils.Interface([
	'function withdrawFundsInCustody(address token)',
]);

function toBigInt(value) {
	if (typeof value === 'bigint') {
		return value;
	}
	if (value == null) {
		return 0n;
	}
	return BigInt(value.toString());
}

export function shouldShowLegacyPanel({ chainId, account, pic, bond, custody }) {
	if (!isLegacyTogaNetwork(chainId) || !account) {
		return false;
	}
	if (toBigInt(custody) > 0n) {
		return true;
	}
	const isPic = pic && account.toLowerCase() === pic.toLowerCase();
	return Boolean(isPic && toBigInt(bond) > 0n);
}

export function buildLegacyPanelActions({
	toga,
	token,
	bond,
	exitRate,
	maxExitRate,
	custody,
	isPic,
}) {
	const actions = {};
	if (isPic && toBigInt(bond) > 0n && maxExitRate != null) {
		const current = toBigInt(exitRate);
		const max = toBigInt(maxExitRate);
		if (current >= max) {
			actions.raiseExitRate = { kind: 'already-max' };
		} else {
			actions.raiseExitRate = {
				kind: 'transaction',
				to: utils.getAddress(toga),
				data: CHANGE_EXIT_IFACE.encodeFunctionData('changeExitRate', [
					token,
					max,
				]),
			};
		}
	}
	if (toBigInt(custody) > 0n) {
		actions.withdrawCustody = {
			kind: 'transaction',
			to: utils.getAddress(toga),
			data: WITHDRAW_IFACE.encodeFunctionData('withdrawFundsInCustody', [
				token,
			]),
		};
	}
	return actions;
}
