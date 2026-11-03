// Create React App's Babel cannot parse import attributes. @wagmi/connectors
// loads @base-org/account, whose build imports package.json that way. Webpack 5
// already accepts a plain JSON import, so drop the attribute.
const fs = require('fs');
const path = require('path');

const file = path.join(
	__dirname,
	'../node_modules/@base-org/account/dist/core/constants.js',
);
if (!fs.existsSync(file)) {
	process.exit(0);
}

const source = fs.readFileSync(file, 'utf8');
const next = source.replace(
	"import pkg from '../../package.json' with { type: 'json' };",
	"import pkg from '../../package.json';",
);
if (next !== source) {
	fs.writeFileSync(file, next);
}
