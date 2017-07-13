const la = require('lazy-ass');
const is = require('check-more-types');

describe.only('blame', () => {
  const blame = require('..').blame

  it('is a function', () => {
    la(is.fn(blame))
  })

  it('gets blame for 1 line of this file', () => {
    const line = 1
    return blame(__filename, line)
      .then(info => {
        la(is.object(info))
        console.log(info)
      })
  })
})

// gt.async('blame for this file 1 line', function () {
//   var p = blame(__filename, 1);
//   la(check.object(p) && check.fn(p.then),
//     'returns a promise', p);
//   p.then(function (info) {
//     la(check.object(info), 'got blame', info);
//     console.log(info);
//     la(check.unemptyString(info.author), 'has author');
//     la(check.unemptyString(info.line), 'has line');
//   }, function onError(err) {
//     console.error(err);
//     la(check.unemptyString(err) || check.unemptyString(err.message), 'error is a message');
//     gt.ok(false, err);
//   }).finally(function () {
//     gt.start();
//   }).done();
// });

// gt.async('blame for this entire file', function () {
//   var p = blame(__filename);
//   la(check.object(p) && check.fn(p.then),
//     'returns a promise', p);
//   p.then(function (info) {
//     la(check.array(info), 'got blame array', info);
//     la(info.length > 0, 'blame info has multiple records', info);
//     var firstLineInfo = info[0];
//     // console.log(firstLineInfo);
//     la(check.unemptyString(firstLineInfo.author), 'has author', firstLineInfo);
//     la(check.unemptyString(firstLineInfo.line), 'has line', firstLineInfo);
//     la(check.unemptyString(firstLineInfo.summary), 'has summary', firstLineInfo);
//   }, function onError(err) {
//     console.error(err);
//     la(check.unemptyString(err) || check.unemptyString(err.message), 'error is a message');
//     gt.ok(false, err);
//   }).finally(function () {
//     gt.start();
//   }).done();
// });
