import { test } from "@vangware/test";
import { parseStringLastValue } from "../../src/parsers/parseStringLastValue";

export default test([
	{
		given: "a valid L with value 5",
		must: "return CronEvery",
		received: parseStringLastValue("5L"),
		wanted: { last: 5 }
	},
	{
		given: "an invalid L",
		must: "return undefined",
		received: parseStringLastValue("INVALID"),
		wanted: undefined
	}
]);
