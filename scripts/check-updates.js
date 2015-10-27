import * as utils from './utils';

export default function main({rootPath, flags}) {
  const folders = ['core', ...utils.getAllPlatforms()];

  return folders.map(path => utils.runInFolder(rootPath, path, `npm-check-updates ${flags[0]}`));
}
