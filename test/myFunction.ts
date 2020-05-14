
import { myFunction } from "../index.ts";

import { getPromiseAssertionApi } from "https://raw.github.com/garronej/evt/v1.6.8/deno_dist/tools/testing/getPromiseAssertionApi.ts";

const { mustResolve } = getPromiseAssertionApi({ "takeIntoAccountArraysOrdering": true});

(async () => {

    await mustResolve({
        "promise": myFunction(),
        "expectedData": ["a", "b", "c"],
        "delay": 0
    });

    console.log("PASS");

})();


