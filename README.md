# @luckykiet/node-printer

Native printer bindings for Node.js on POSIX and Windows. Fork of [@thiagoelg/node-printer](https://github.com/thiagoelg/node-printer) with **Node 24+ support**.

[![npm version](https://badge.fury.io/js/@luckykiet%2Fnode-printer.svg)](https://www.npmjs.com/package/@luckykiet/node-printer)

## What's different from the original?

- **Node 24/25 support** — C++20 build, updated V8 compatibility
- **VS2026 compatibility** — fixed C++ two-phase name lookup for MSVC 18+
- **No Python dependency** — build uses Node.js instead of Python for source file discovery
- Updated native dependencies (`nan` 2.25+, `node-abi` 4.26+)
- macOS arm64 (Apple Silicon) prebuild support
- Modernized GitHub Actions (v4, Node 24)
- Minimum Node version: **20.0.0**

## Install

```bash
npm install @luckykiet/node-printer
```

### Build prerequisites

The native addon compiles from source if no prebuild is available.

**macOS:** Xcode Command Line Tools (ships with CUPS)
```bash
xcode-select --install
```

**Linux (Debian/Ubuntu):**
```bash
sudo apt-get install libcups2-dev
```

**Windows:** Visual Studio Build Tools with C++ workload

## API

```js
const printer = require('@luckykiet/node-printer');
```

| Method | Description |
|--------|-------------|
| `getPrinters()` | List all installed printers with jobs and statuses |
| `getPrinter(name)` | Get specific printer info |
| `getDefaultPrinterName()` | Get default printer name |
| `getPrinterDriverOptions(name)` | Get driver options (POSIX only) |
| `getSelectedPaperSize(name)` | Get default paper size (POSIX only) |
| `printDirect(options)` | Send raw data to printer |
| `printFile(options)` | Print a file (POSIX only) |
| `getSupportedPrintFormats()` | List supported formats (RAW, TEXT, PDF, etc.) |
| `getJob(printerName, jobId)` | Get job info |
| `setJob(printerName, jobId, command)` | Send command to job (e.g. CANCEL) |
| `getSupportedJobCommands()` | List supported job commands |

## Examples

```js
const printer = require('@luckykiet/node-printer');

// List printers
console.log(printer.getPrinters());

// Print raw text
printer.printDirect({
  data: 'Hello from Node.js!',
  printer: printer.getDefaultPrinterName(),
  type: 'TEXT',
  success: (jobId) => console.log('Job ID:', jobId),
  error: (err) => console.error(err),
});
```

See the [examples](./examples) directory for more usage patterns.

## Credits

- **Ion Lupascu** — original author ([tojocky/node-printer](https://github.com/tojocky/node-printer))
- **Thiago Lugli** ([@thiagoelg](https://github.com/thiagoelg)) — Node 12+ support & prebuild CI
- **Eko Eryanto** ([@ekoeryanto](https://github.com/ekoeryanto)) — prebuild integration

## License

[MIT](http://opensource.org/licenses/MIT)
