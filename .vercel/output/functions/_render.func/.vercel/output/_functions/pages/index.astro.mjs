import { c as createComponent, r as renderTemplate, a as renderHead, b as renderSlot, e as createAstro, m as maybeRenderHead, s as spreadAttributes, f as addAttribute, g as renderComponent } from '../chunks/astro/server_CYq_Aq8z.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/api.svg"><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/layouts/Layout.astro", void 0);

const PROJECT_APIS = [
  {
    img: "/Pokemon.png",
    name: "Pokemon API",
    description: "API para obtener información de cada uno de los Pokemon",
    github: "https://github.com/NesniDev/Apis-Projects/tree/main/pokemon",
    webUrl: "https://pokemon-neider.netlify.app"
  },
  {
    img: "/Ip.png",
    name: "DirecciónIp API",
    description: "API para obtener la dirección IP de un usuario en formato JSON",
    github: "https://github.com/NesniDev/Apis-Projects/tree/main/direccion_ip",
    webUrl: "https://direccion-ip.netlify.app"
  },
  {
    img: "/Peliculas.png",
    name: "Películas API",
    description: "API para obtener información de cada una de las películas en tendencia",
    github: "https://github.com/NesniDev/Apis-Projects/tree/main/peliculas",
    webUrl: "https://peliculas-neider.netlify.app"
  },
  {
    img: "/R&M.png",
    name: "Rick and Morty API",
    description: "API para obtener información de cada uno de los personajes de Rick and Morty",
    github: "https://github.com/NesniDev/Apis-Projects/tree/main/rickandmorty",
    webUrl: "https://rick-morty-neider.netlify.app"
  }
];

const $$Astro$2 = createAstro();
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/components/img/Github.astro", void 0);

const $$Astro$1 = createAstro();
const $$Web = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Web;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-world-www"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path><path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path><path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path><path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path><path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path><path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path><path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path><path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path></svg>`;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/components/img/Web.astro", void 0);

const $$Articulos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-gnr6sht7> ${PROJECT_APIS.map((project) => {
    const { img, name, description, github, webUrl } = project;
    return renderTemplate`<article class="project" data-astro-cid-gnr6sht7> <img${addAttribute(img, "src")}${addAttribute(name, "alt")} data-astro-cid-gnr6sht7> <h2 data-astro-cid-gnr6sht7> <a${addAttribute(webUrl, "href")} data-astro-cid-gnr6sht7>${name}</a> </h2> <p data-astro-cid-gnr6sht7>${description}</p> <div class="links" data-astro-cid-gnr6sht7> <a${addAttribute(github, "href")} target="_blank" data-astro-cid-gnr6sht7> ${renderComponent($$result, "Github", $$Github, { "class": "Icon", "data-astro-cid-gnr6sht7": true })}
GitHub
</a> <a${addAttribute(webUrl, "href")} target="_blank" data-astro-cid-gnr6sht7> ${renderComponent($$result, "Web", $$Web, { "class": "Icon", "data-astro-cid-gnr6sht7": true })}
Web
</a> </div> </article>`;
  })} </section> `;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/components/Articulos.astro", void 0);

const $$Astro = createAstro();
const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/components/img/Javascript.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina principal de las APIs en JavaScript", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section data-astro-cid-j7pv25f6> <div class="title" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Páginas de visualización de APIs en JavaScript</h2> ${renderComponent($$result2, "Javascript", $$Javascript, { "class": "Icon", "data-astro-cid-j7pv25f6": true })} </div> <div class="content" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>
Esta página está dedicada a mostrar varios proyectos que utilizan APIs
          en JavaScript para interactuar con datos en tiempo real. A través de
          una serie de ejemplos prácticos y demostraciones, los usuarios pueden
          explorar cómo las APIs acceden a datos externos.
</p> </div> </section> ${renderComponent($$result2, "Articulos", $$Articulos, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "C:/Users/neider_nieto/Desktop/P\xE1ginas Web/page-view-apis/src/pages/index.astro", void 0);

const $$file = "C:/Users/neider_nieto/Desktop/Páginas Web/page-view-apis/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
