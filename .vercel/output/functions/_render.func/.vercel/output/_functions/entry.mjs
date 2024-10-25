import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cukk_v6V.mjs';
import { manifest } from './manifest_7If06-We.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/index.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/index.astro", _page0],
    ["node_modules/.pnpm/astro@5.0.0-beta.5_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page1]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e3fd4b78-ad77-4c73-b0a2-e2bb29c59e3a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
