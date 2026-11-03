/* global BigInt */
import { utils } from 'ethers';

const SEND_IFACE = new utils.Interface([
	'function send(address to, uint256 amount, bytes data)',
]);
const APPROVE_IFACE = new utils.Interface([
	'function approve(address spender, uint256 amount)',
]);
const BOND_IFACE = new utils.Interface([
	'function bond(address token, uint256 amount, int96 exitRate)',
]);

function toBigInt(value) {
	if (typeof value === 'bigint') {
		return value;
	}
	return BigInt(value.toString());
}

export function buildBidTransactions({
	method,
	toga,
	token,
	amount,
	exitRatePerSecond,
	allowance,
}) {
	const amountValue = toBigInt(amount);
	const exitRate = toBigInt(exitRatePerSecond);
	const allowanceValue = toBigInt(allowance ?? 0);
	if (amountValue <= 0n) {
		throw new Error('Enter a stake greater than zero');
	}
	if (exitRate < 0n) {
		throw new Error('Exit rate per second must not be negative');
	}

	const tokenAddress = utils.getAddress(token);
	const togaAddress = utils.getAddress(toga);

	if (method === 'erc777-send') {
		const userData = utils.defaultAbiCoder.encode(['int96'], [exitRate]);
		return [
			{
				to: tokenAddress,
				data: SEND_IFACE.encodeFunctionData('send', [
					togaAddress,
					amountValue,
					userData,
				]),
			},
		];
	}

	if (method === 'approve-and-bond') {
		const steps = [];
		if (allowanceValue < amountValue) {
			steps.push({
				to: tokenAddress,
				data: APPROVE_IFACE.encodeFunctionData('approve', [
					togaAddress,
					amountValue,
				]),
			});
		}
		steps.push({
			to: togaAddress,
			data: BOND_IFACE.encodeFunctionData('bond', [
				tokenAddress,
				amountValue,
				exitRate,
			]),
		});
		return steps;
	}

	throw new Error(`Cannot build a bid for method ${method}`);
}
