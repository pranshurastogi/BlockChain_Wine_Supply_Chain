/*
* NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a
* function when declaring them. Failure to do so will cause commands to hang. ex:
* ```
 * mainnet: {
 *     provider: function() {
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>')
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
const HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "twist doctor stand team try mushroom coffee salmon thank dust horn police";
//0x4d4E8DF293475E4a2a78Fa4b9D7004b628381047 - this is default address created from mnemonic above
//0xD59b6C2463670F5D7cE3f95Ec21B0Ef02cCfc69B - Contract Address Rinkeby
module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // to customize your Truffle configuration!
    networks: {
        development_cli: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*",
            websockets: true
        },
        development_ui: {
            host: "127.0.0.1",
            port: 7545,
            network_id: 5777
        },
        rinkeby: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/491b68b60b4e432ab0fee1febb9278f3");
            },
            network_id: 4
        }
    }
};