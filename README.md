# TOGA dashboard

Dashboard for TOGA (Transparent Ongoing Auction), the Superfluid auction that decides the PIC (Patrician in Charge) of each Super Token.

Live at https://toga.superfluid.org.

## Run locally

Use Node.js 24 and Yarn 1. The app is in `toga-dashboard/`.

```sh
cd toga-dashboard
yarn install
yarn start
```

Set `REACT_APP_WALLET_CONNECT_PROJECT_ID` for WalletConnect.

## Tests

```sh
yarn test
yarn test:live
```

`yarn test` runs the unit tests (vitest). `yarn test:live` runs the tests that read from a live chain.

## Deployment

https://toga.superfluid.org is deployed by Vercel's Git integration: pushes to `master` go to production, and pull requests get Vercel preview deployments. The GitHub Actions workflows only test and build (`release.yml`) and publish a pull request preview to GitHub Pages (`preview.yml`).
