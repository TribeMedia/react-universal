import * as utils from './utils';
import testAll from './test-all';

export default function main({rootPath, sha1}) {
  const foldersToTest = utils.dedupe(utils.extractFolderNames(utils.getDiff(sha1)));

  const affectsAllPlatforms = foldersToTest.filter(loc => loc.indexOf('core') === 0).length > 0;

  if (affectsAllPlatforms) {
    return testAll({rootPath});
  }

  return foldersToTest.map(path => utils.runInFolder(rootPath, path, ['npm install', 'npm test']));
}
