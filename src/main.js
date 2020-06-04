const core = require('@actions/core');
const terminal = require('@actions/exec');

const username = core.getInput('username');
const password = core.getInput('password');
const loginServer = core.getInput('login-server');

terminal.exec(`docker login -u ${username} -p ${password} ${loginServer}`);
