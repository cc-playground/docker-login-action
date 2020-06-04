(async () => {
  const core = require('@actions/core');
  const terminal = require('@actions/exec');

  const username = core.getInput('username', {required: true});
  const password = core.getInput('password', {required: true});
  const loginServer = core.getInput('login-server', {required: true});

  const exitCode = await terminal.exec(`docker login -u ${username} -p ${password} ${loginServer}`)
  if(exitCode !== 0) {
    core.setFailed(`Exit code: ${exitCode}`);
  }
})();
