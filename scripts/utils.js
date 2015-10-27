import path from 'path';
import shell from 'shelljs';

export function getDiff(sha1) {
  return shell
    .exec(`git diff --name-only ${sha1} ${sha1}^`, {silent: true}).output
    .split('\n');
}

export function extractFolderNames(paths) {
  return paths
    .map(loc => path.dirname(loc))
    .filter(loc => loc === 'core' || loc.indexOf('platforms') === 0);
}

export function runInFolder(parent, folder, cmd) {
  const commands = Array.isArray(cmd) ? cmd : [cmd];
  shell.cd(folder);
  commands.forEach(cmd => shell.exec(cmd));
  shell.cd(path.relative(shell.pwd(), parent));
}

export function dedupe(changedFolders) {
  return [...new Set(changedFolders)];
}

export function getAllPlatforms() {
  return shell.ls('platforms').map(loc => `platforms/${loc}`);
}
