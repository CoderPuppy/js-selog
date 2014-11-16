const selog = require('selog')('example')
selog('fizbuz')
selog.sub('foo') // equivalent to `selog('example:foo')`