

import { assert } from "https://raw.github.com/garronej/evt/v1.6.8/deno_dist/tools/typeSafety/index.ts";
import * as inDepth from "https://raw.github.com/garronej/evt/v1.6.8/deno_dist/tools/inDepth/index.ts";
import { myObject } from "../index.ts";

assert(
    inDepth.same(
        myObject, 
        { "p": "FOO" }
    )
);

console.log("PASS");



