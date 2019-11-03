
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactor = require('./build/Spring.json');
const interface = compiledFactory.interface;
const bytecode = compiledFactory.bytecode;

const provider = new HDWalletProvider(
    'muffin amused boost truly monkey arrange dutch feed retire slender shield demand',
    'https://ropsten.infura.io/v3/a47f7a4d17d942eba355a224cdacac83'
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data:bytecode}).send({gas:'3000000',from:accounts[0]});
    console.log('contract deployed');
};
deploy();