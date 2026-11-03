// solc emits PUSH3 instead of PUSH4 when the selector's top byte is zero.
// tokensReceived is 0x0023de29, so v3 TOGA bytecode contains 6223de29, not 630023de29.

const SELECTORS = {
	bond: '7e5a8807',
	withdrawFundsInCustody: '6da8d054',
	tokensReceived: '0023de29',
};

function normalizeBytecode(bytecodeHex) {
	return String(bytecodeHex || '')
		.replace(/^0x/i, '')
		.toLowerCase();
}

function hasSelector(bytecode, selector) {
	if (bytecode.includes(`63${selector}`)) {
		return true;
	}
	if (selector.startsWith('00') && bytecode.includes(`62${selector.slice(2)}`)) {
		return true;
	}
	return false;
}

export function scanBytecodeCapabilities(bytecodeHex) {
	const bytecode = normalizeBytecode(bytecodeHex);
	return {
		hasBond: hasSelector(bytecode, SELECTORS.bond),
		hasTokensReceived: hasSelector(bytecode, SELECTORS.tokensReceived),
		hasWithdrawFundsInCustody: hasSelector(
			bytecode,
			SELECTORS.withdrawFundsInCustody,
		),
	};
}

export function bidMethodFromBytecode(bytecodeHex) {
	const caps = scanBytecodeCapabilities(bytecodeHex);
	if (caps.hasBond) {
		return 'approve-and-bond';
	}
	if (caps.hasTokensReceived) {
		return 'erc777-send';
	}
	return null;
}
