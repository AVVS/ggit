var la = require('lazy-ass');
var is = require('check-more-types');

describe('changd files', function () {
  var changedFiles = require('..').changedFiles;
  it('is a function', function () {
    la(is.fn(changedFiles));
  });
});
