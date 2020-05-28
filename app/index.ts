import { Application, Context } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { router } from "./routes.ts";

const app = new Application();

app.use(router.routes());

await app.listen({ port: 8000 });
