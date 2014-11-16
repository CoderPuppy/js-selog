# SeLog

## Usage
```javascript
const debug = require('selog')('example')
debug('fizbuz')
debug.sub('foo') // equivalent to `selog('example:foo')`
```

## API
- `selog(name): debug` - Create a namespace
- `debug(msg, ...)` - Log to the namespace
- `debug.trace` - Trace to the namespace (prefixes the namespace with `trace:`)
- `debug.name` - The name
- `debug.nameParts` - The name split on colons
- `debug.parent` - The parent namespace
- `debug.sub(name)` - Create a sub namespace