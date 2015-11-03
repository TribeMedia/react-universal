import * as utils from './utils';

export default function main({rootPath, flags}) {
  const folders = ['.', 'core', ...utils.getAllPlatforms()];
  const command = `npm-check-updates`;
  return folders.map(path => utils.runInFolder(rootPath, path, flags
    ? command + ` ${flags.join(' ')}`
    : command));
}
