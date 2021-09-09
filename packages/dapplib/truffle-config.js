require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name renew still attitude include problem equal gift'; 
let testAccounts = [
"0x7af7b3ce1c23de9a87f028c45f061df6df209634146137b30bd4a04ba6f3ce3d",
"0xcd74e0dd09fa9ff3719462c9738daf487ea4d29e1af5a21014b1f385aa02171f",
"0x80e40876b5c1afec348f4a5a2066ae9a6e5f74ccee0bacdb36328f44066c0d7f",
"0x4eaf731609e232086dea925faacfc803f61943c5a177f35dd0923361a203e37f",
"0xa7fbe500f2c93c28bce2ec0f7dc96c7645f44d7cb6ba5452693c0a279b301f60",
"0x0e028d8f19a46127c845ae9f4e308c7bd14456d90c4156ed9e1e14c5111f4e97",
"0xbbdc695e7dd6bc376f5f8512e1e2480fe1016ab867921b4319be426a1736d274",
"0x28ffbbfeaf43f7c04c626a9f8b63488503a56ea1c458a47a479d723569645c2b",
"0xb520b4187ae448dbda263453e2be9aa8bc5f79cb3883adec092fe113973847f3",
"0x96222ba9930c1c63fe1ebfb79e8e029d7d62dfa5bc3643474243a45f13ed9032"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


