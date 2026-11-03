import { describe, expect, it } from 'vitest';
import { utils } from 'ethers';
import { buildBidTransactions } from './buildBidTransactions.js';

const TOKEN = '0x1111111111111111111111111111111111111111';
const TOGA = '0x2222222222222222222222222222222222222222';

describe('buildBidTransactions', () => {
	it('encodes ERC-777 send with the raw amount and an int96 exit rate', () => {
		const amount = 1000000000000000000n;
		const txs = buildBidTransactions({
			method: 'erc777-send',
			toga: TOGA,
			token: TOKEN,
			amount,
			exitRatePerSecond: 42n,
		});
		expect(txs).toHaveLength(1);
		expect(txs[0].to).toBe(utils.getAddress(TOKEN));
		const decoded = new utils.Interface([
			'function send(address to, uint256 amount, bytes data)',
		]).decodeFunctionData('send', txs[0].data);
		expect(decoded.amount.toString()).toBe(amount.toString());
		expect(decoded.to).toBe(utils.getAddress(TOGA));
		expect(utils.defaultAbiCoder.decode(['int96'], decoded.data)[0].toString()).toBe(
			'42',
		);
	});

	it('skips approve when allowance already covers the stake', () => {
		const txs = buildBidTransactions({
			method: 'approve-and-bond',
			toga: TOGA,
			token: TOKEN,
			amount: 500n,
			exitRatePerSecond: 1n,
			allowance: 500n,
		});
		expect(txs).toHaveLength(1);
		expect(txs[0].to).toBe(utils.getAddress(TOGA));
	});

	it('approves before bond when allowance is short', () => {
		const txs = buildBidTransactions({
			method: 'approve-and-bond',
			toga: TOGA,
			token: TOKEN,
			amount: 500n,
			exitRatePerSecond: 1n,
			allowance: 100n,
		});
		expect(txs.map((tx) => tx.to)).toEqual([
			utils.getAddress(TOKEN),
			utils.getAddress(TOGA),
		]);
	});

	it('rejects a zero stake, a negative rate, and an unknown method', () => {
		expect(() =>
			buildBidTransactions({
				method: 'erc777-send',
				toga: TOGA,
				token: TOKEN,
				amount: 0n,
				exitRatePerSecond: 1n,
			}),
		).toThrow(/stake/i);
		expect(() =>
			buildBidTransactions({
				method: 'erc777-send',
				toga: TOGA,
				token: TOKEN,
				amount: 1n,
				exitRatePerSecond: -1n,
			}),
		).toThrow(/negative/i);
		expect(() =>
			buildBidTransactions({
				method: 'send',
				toga: TOGA,
				token: TOKEN,
				amount: 1n,
				exitRatePerSecond: 1n,
			}),
		).toThrow(/method/i);
	});
});
