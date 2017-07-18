## changedFilesAfter

Returns list of unique files modified / added / deleted after given commit.
The commits are limited to specific branch (usually "master") to avoid mixing
up multiple branches.

```javascript
var changedFilesAfter = require('ggit').changedFilesAfter;
changedFilesAfter('a12f55f', 'master')
    .then(console.log)
    .catch(console.error);
/*
something like
[ 'README.md',
  'docs/commits.md',
  'src/commits.js',
  'src/get-one-line-log.js',
  'package.json',
  'src/last-commit-id.js' ]
*/
```
