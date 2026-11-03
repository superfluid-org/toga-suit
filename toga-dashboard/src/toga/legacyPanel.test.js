import { describe, expect, it } from 'vitest';
import { utils } from 'ethers';
import {
	buildLegacyPanelActions,
	shouldShowLegacyPanel,
} from './legacyPanel.js';

const TOGA = '0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22';
const TOKEN = '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const ACCOUNT = '0x00000000000000000000000000000000000000a1';

describe('shouldShowLegacyPanel', () => {
	it('is hidden off the six networks and when nothing is held', () => {
		expect(
			shouldShowLegacyPanel({
				chainId: 1,
				account: ACCOUNT,
				pic: ACCOUNT,
				bond: 100n,
				custody: 0n,
			}),
		).toBe(false);
		expect(
			shouldShowLegacyPanel({
				chainId: 100,
				account: ACCOUNT,
				pic: ACCOUNT,
				bond: 0n,
				custody: 0n,
			}),
		).toBe(false);
	});

	it('is shown for the current PIC and for a custodied balance', () => {
		expect(
			shouldShowLegacyPanel({
				chainId: 100,
				account: ACCOUNT,
				pic: ACCOUNT.toUpperCase(),
				bond: 1n,
				custody: 0n,
			}),
		).toBe(true);
		expect(
			shouldShowLegacyPanel({
				chainId: 100,
				account: ACCOUNT,
				pic: '0x00000000000000000000000000000000000000b2',
				bond: 0n,
				custody: 1n,
			}),
		).toBe(true);
	});
});

describe('buildLegacyPanelActions', () => {
	it('raises the exit rate to the max while the stream is slower', () => {
		const actions = buildLegacyPanelActions({
			toga: TOGA,
			token: TOKEN,
			bond: 10n,
			exitRate: 1n,
			maxExitRate: 100n,
			custody: 0n,
			isPic: true,
		});
		const decoded = new utils.Interface([
			'function changeExitRate(address token, int96 newExitRate)',
		]).decodeFunctionData('changeExitRate', actions.raiseExitRate.data);
		expect(actions.raiseExitRate.to).toBe(utils.getAddress(TOGA));
		expect(decoded.newExitRate.toString()).toBe('100');
	});

	it('omits the exit-rate action when the max rate is unknown', () => {
		const actions = buildLegacyPanelActions({
			toga: TOGA,
			token: TOKEN,
			bond: 10n,
			exitRate: 1n,
			maxExitRate: null,
			custody: 0n,
			isPic: true,
		});
		expect(actions.raiseExitRate).toBeUndefined();
	});

	it('does not send a transaction when the stream is already at the max', () => {
		const actions = buildLegacyPanelActions({
			toga: TOGA,
			token: TOKEN,
			bond: 10n,
			exitRate: 100n,
			maxExitRate: 50n,
			custody: 0n,
			isPic: true,
		});
		expect(actions.raiseExitRate).toEqual({ kind: 'already-max' });
	});

	it('withdraws custody for the selected token', () => {
		const actions = buildLegacyPanelActions({
			toga: TOGA,
			token: TOKEN,
			bond: 0n,
			exitRate: 0n,
			maxExitRate: 0n,
			custody: 5n,
			isPic: false,
		});
		const decoded = new utils.Interface([
			'function withdrawFundsInCustody(address token)',
		]).decodeFunctionData('withdrawFundsInCustody', actions.withdrawCustody.data);
		expect(decoded.token).toBe(utils.getAddress(TOKEN));
		expect(actions.raiseExitRate).toBeUndefined();
	});
});
