import { keywords, description } from "./seo.mts";

export const head: Array<any> = [
  ["meta", { name: "referrer", content: "never" }],
  ["link", { rel: "icon", href: "./images/logo.png" }],
  ["link", { rel: "apple-touch-icon", href: "./images/logo.jpg" }],
  ["link", { rel: "keywords", content: keywords }],
  ["link", { rel: "description", content: description }],
  [
    "script",
    {},
    `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "jporfk7f2x");
    `,
  ],
  [
    "script",
    {
      async: "async",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3201638445045055",
      crossorigin: "anonymous",
    },
  ],
];
