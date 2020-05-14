
//This will not run on deno, we need a separate index to run our tests.

import * as child_process from "child_process DENOIFY: DEPENDENCY UNMET (BUILTIN)";
import * as path from "https://deno.land/std/node/path.ts";
import { Deferred } from "https://raw.github.com/garronej/evt/v1.6.8/deno_dist/tools/Deferred.ts";

(async () => {

    if (!!process.env.FORK) {

        process.once("unhandledRejection", error => { throw error; });

        require(process.env.FORK);

        return;

    }

    for (const name of [
        "myFunction",
        "myObject"
    ]) {

        console.log(`Running: ${name}`);

        const dExitCode = new Deferred<number>();

        child_process.fork(
            __filename,
            undefined,
            { "env": { "FORK": path.join(__dirname, name) } }
        )
            .on("message", console.log)
            .once("exit", code => dExitCode.resolve(code ?? 1))
            ;

        const exitCode = await dExitCode.pr;

        if (exitCode !== 0) {
            console.log(`${name} exited with error code: ${exitCode}`);
            process.exit(exitCode);
        }

        console.log("\n");

    }

})();
