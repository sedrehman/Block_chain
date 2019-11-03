const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
//import { resolve } from './path';
//import { compile } from './solc';
//import { removeSync, readFileSync, ensureDirSync, outputJSON } from 'fs-extra';

const buildPath = resolve(__dirname, 'build')
removeSync(buildPath)

const codePath = resolve(__dirname, 'EtherChat.sol');
const source = readFileSync(codePath, 'utf8');
const output = compile(source, 1).contracts;

ensureDirSync(buildPath);

for(let contract in output){
    outputJSON(
        resolve(buildPath, contract.replace(':','')+'.json'),
        output[contract]
    );
}