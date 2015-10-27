import * as utils from './utils';

export default function main({rootPath, flags}) {
  const folders = flags || ['core', ...utils.getAllPlatforms()];

  return folders.map(path => utils.runInFolder(rootPath, path, 'npm install'));
}
