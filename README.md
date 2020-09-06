![@vangware/cron logo](https://i.imgur.com/ZxqT2Wh.png)

![Build Status](https://img.shields.io/travis/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://travis-ci.org/github/vangware/cron)
![License](https://img.shields.io/npm/l/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/blob/main/LICENSE)
![NPM Version](https://img.shields.io/npm/v/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/cron)
![Open Issues](https://img.shields.io/github/issues/vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/cron/issues)
![Size](https://img.shields.io/bundlephobia/minzip/@vangware/cron.svg?style=for-the-badge&labelColor=666&color=2b7&label=size&link=https://bundlephobia.com/result?p=@vangware/cron)

Cron Quartz and Cron UNIX expression parser.

## Usage

### 📦 Node

```typescript
import { parseStringQuartz, parseCronQuartz } from "@vangware/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```

### 🦕 Deno

```typescript
import { parseStringQuartz, parseCronQuartz } from "https://cdn.skypack.dev/@vangware/cron";

const cron = parseStringQuartz("1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10");
/*
{
	seconds: { every: 3, start: { from: 1, to: 2 } },
	minutes: [{ from: 1, to: 2 }, 3, 4],
	hours: "*",
	dayOfMonth: { nearest: 2 },
	month: ["SEP", "OCT"],
	dayOfWeek: { last: 1 },
	year: { every: 10, start: "*" }
}
*/

parseCronQuartz(cron); // "1-2/3 1-2,3,4 * 2W SEP,OCT 1L */10"
```
