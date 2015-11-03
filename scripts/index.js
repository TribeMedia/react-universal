/* global target */

import 'shelljs/make';
import testAll from './test-all';
import testDiffOnly from './test-diff-only';
import checkUpdates from './check-updates';
import install from './install';

const sha1 = process.env.CIRCLE_SHA1 || 'HEAD';
const rootPath = process.cwd();

target.testDiffOnly = () => {
  testDiffOnly({rootPath, sha1});
};

target.test = () => {
  testAll({rootPath});
};

target.checkUpdates = (flags) => {
  checkUpdates({rootPath, flags});
};

target.install = (flags) => {
  install({rootPath, flags});
};
