import * as utils from './utils';

export default function main({rootPath}) {
  const foldersToTest = ['core', ...utils.getAllPlatforms()];

  return foldersToTest.map(path => utils.runInFolder(rootPath, path, ['npm install', 'npm test']));
}
