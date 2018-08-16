// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!

var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = require('./mnemonic.secret');

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/3ikLuZwohJ81nAe4aPyI');
      },
      network_id: '3'/*,
      gas: 7000000,
      gasPrice: 10000000000*/
    },
    rinkeby: {
      provider: function() {
        //return new HDWalletProvider(mnemonic, 'http://localhost:8545');
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/3ikLuZwohJ81nAe4aPyI');
      },
      network_id: '4'/*,
      gas: 7000000,
      gasPrice: 10000000000*/
    },
    rinkeby_localsync: {
      host: 'localhost',
      port: 8545,
      network_id: '4',
      from: '0x4B8Ad23e5923c7F479F35615a05e5868325aA85B'/*,
      gas: 5000000,   // 7500000
      gasPrice: 10000000000*/
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    } 
  }
};