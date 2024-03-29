export const head: Array<any> = [
  ["meta", { name: "referrer", content: "never" }],
  ["link", { rel: "icon", href: "./images/logo.png" }],
  ["link", { rel: "keywords", content: "关键词" }],
  ["link", { rel: "description", content: "描述" }],
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
];
