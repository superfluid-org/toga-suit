# TOGA dashboard: active contracts and legacy bonds

Published `@superfluid-finance/metadata` 1.6.5 still lists the previous TOGA on six networks. The app overrides those six. Every other network keeps `contractsV1.toga`.

The app network object is metadata spread under the wagmi chain. Wagmi replaces `name` (`xdai-mainnet` becomes `Gnosis`) and sets `id`. Lookups use `network.chainId ?? network.id`.

## Active TOGA

| Chain id | Network | Active TOGA |
| --- | --- | --- |
| 100 | Gnosis | `0x177Ab68dc7B0032Fce7d64d5BD28a5983bD42B3B` |
| 137 | Polygon | `0xeF3cB64Ab9021E400f4331929d8d02A47b333Af1` |
| 10 | Optimism | `0x91b577553B5390d47A1984eE500663EE7671DcE6` |
| 42161 | Arbitrum One | `0xD09302C533Ca020E02FF4F70BBa606e3C2b3F4a6` |
| 43114 | Avalanche | `0xD226e7C591F6aE719079b8A31654221d980DB5ce` |
| 56 | BNB Smart Chain | `0xAb6e2f343C1909258580e4E6A149E24CbB3D2AEd` |

`governance.getRewardAddress(host, address(0))` is the source of truth when the call returns a non-zero address. A zero address or a failed call uses the table above, then metadata.

These six contracts bid only through ERC-777 `tokensReceived`. The stake is the raw token amount. `userData` is `abi.encode(int96 exitRatePerSecond)`. They pay an outbid PIC with `transfer` and have no custodian.

`bond(address,uint256,int96)` exists in later source and is not in these deployments. The app calls it only when runtime bytecode contains the selector as `PUSH4`, or as `PUSH3` when the selector's top byte is zero. `tokensReceived` (`0x0023de29`) is the PUSH3 case: the bytecode contains `6223de29`, not `630023de29`.

A daily exit rate is an integer number of base units divided by 86400. A non-zero daily amount that rounds to zero per second is rejected. Zero is allowed. Amounts with more fractional digits than the token's decimals are rejected.

## Previous TOGA

| Chain id | Deprecated TOGA |
| --- | --- |
| 100 | `0xb7DE52F4281a7a276E18C40F94cd93159C4A2d22` |
| 137 | `0x6AEAeE5Fd4D05A741723D752D30EE4D72690A8f7` |
| 10 | `0xA3c8502187fD7a7118eAD59dc811281448946C8f` |
| 42161 | `0xFC63B7C762B10670Eda15cF3ca3970bCDB28C9eF` |
| 43114 | `0x3D9A67D5ec1E72CEcA8157e028855056786b6159` |
| 56 | `0xFCD84210f5d51Cd40a30443d44d6A5500d5D10dF` |

The panel is shown only on these chain ids, and only when the connected account is the current PIC with a non-zero bond or has a non-zero custodian balance for the selected token.

The PIC can raise `changeExitRate` to `getMaxExitRateFor`. The button is omitted when that rate cannot be read, and it is not sent when the current rate is already at least the max. `minBondDuration()` supplies the "empties in" duration. Custodied tokens are withdrawn with `withdrawFundsInCustody`. That call sends the tokens to the caller, so the wallet must be able to receive them. There is no self-outbid and no Become PIC action on the deprecated contract. After the tokens are liquid, the account stakes on the active TOGA.
