var getLog = require('../getOneLineLog');

QUnit.module('getOneLineLog');

QUnit.test('4 commits', function (assert) {
  assert.will(getLog({n: 4}), 'getting 4 commits');
});

QUnit.test('1 commits', function (assert) {
  assert.will(getLog({n: 1}), 'getting 1 commits');
});

QUnit.test('all commits', function (assert) {
  assert.will(getLog(), 'getting all commits');
});

QUnit.test('4 commits number', function (assert) {
  assert.will(getLog({n: 4})
    .then(function (commits) {
      return Array.isArray(commits) &&
        commits.length === 4
    }), 'returns array with 4 commits');
});
