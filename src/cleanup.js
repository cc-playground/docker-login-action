(async () => {
  const core = require('@actions/core');
  const terminal = require('@actions/exec');
  const loginServer = core.getInput('login-server', {required: true});

  const exitCode = await terminal.exec(`docker logout ${loginServer}`);
  if(exitCode !== 0) {
    core.setFailed(`Exit code: ${exitCode}`);
  }
})();
