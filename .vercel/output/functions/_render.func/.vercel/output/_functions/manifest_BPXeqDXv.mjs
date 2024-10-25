import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B4irPDOa.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BJyk_X5L.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/neider_nieto/Desktop/P%C3%A1ginas%20Web/page-view-apis/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{font-family:monospace;background:linear-gradient(to bottom,#13151a,#1d4371);background-repeat:no-repeat;background-size:cover;background-attachment:fixed;display:grid;place-content:center;padding:20px;margin:0 auto;max-width:1000px;color:#fff}section[data-astro-cid-gnr6sht7]{display:grid;grid-template-columns:repeat(3,minmax(200px,1fr));max-width:1000px;gap:15px}.project[data-astro-cid-gnr6sht7]{background:radial-gradient(circle at left,#fff,#898282);background-size:100% 50%;display:flex;flex-direction:column;align-items:center;border-radius:10px;overflow:hidden}.project[data-astro-cid-gnr6sht7] img[data-astro-cid-gnr6sht7]{width:100%;height:200px;object-fit:cover}.links[data-astro-cid-gnr6sht7]{display:flex;justify-content:center;padding:15px 0;gap:15px}.project[data-astro-cid-gnr6sht7] h2[data-astro-cid-gnr6sht7]{font-size:20px;margin:15px 0;text-shadow:1px 1px 2px #000000;transition:color .2s ease-in-out}.project[data-astro-cid-gnr6sht7] h2[data-astro-cid-gnr6sht7]:hover{color:#000;text-shadow:1px 1px 2px #ffffff}.project[data-astro-cid-gnr6sht7] h2[data-astro-cid-gnr6sht7] a[data-astro-cid-gnr6sht7]{color:#fff;text-decoration:none}.project[data-astro-cid-gnr6sht7] p[data-astro-cid-gnr6sht7]{margin:0;font-size:15px;padding:0 10px;text-wrap:balance;text-align:center;color:#000}.links[data-astro-cid-gnr6sht7] a[data-astro-cid-gnr6sht7]{display:flex;align-items:center;gap:5px;padding:5px 10px;border-radius:5px;background-color:#a29dab59;color:#000;text-decoration:none;font-weight:700;font-size:13px;border:#000000 solid 1px;transition:all .2s ease-in-out}.links[data-astro-cid-gnr6sht7] a[data-astro-cid-gnr6sht7]:hover{background-color:#000;color:#fff;scale:1.1}.Icon[data-astro-cid-gnr6sht7]{width:17px}section[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;align-items:center;gap:15px;margin-bottom:35px}.title[data-astro-cid-j7pv25f6]{display:flex;align-items:center;gap:30px;text-transform:uppercase}p[data-astro-cid-j7pv25f6]{font-size:15px;margin:30px 0;max-width:600px;text-align:center}.Icon[data-astro-cid-j7pv25f6]{width:100px}.Icon2[data-astro-cid-j7pv25f6]{width:500px;height:auto}.content[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center;gap:15px}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.0.0-beta.5_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/neider_nieto/Desktop/Páginas Web/page-view-apis/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.0.0-beta.5_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/neider_nieto/Desktop/Páginas Web/page-view-apis/node_modules/.pnpm/astro@5.0.0-beta.5_typescript@5.6.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Bzw3Ptqv.mjs","C:/Users/neider_nieto/Desktop/Páginas Web/page-view-apis/node_modules/.pnpm/astro@5.0.0-beta.5_typescript@5.6.3/node_modules/astro/dist/env/setup.js":"chunks/setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BPXeqDXv.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/api.svg","/Ip.png","/Peliculas.png","/Pokemon.png","/R&M.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"HFGZfZuhgiyDOOeweD/xiJ6BLVJHlFzXXhkEWBXBCik=","envGetSecretEnabled":true});

export { manifest };
