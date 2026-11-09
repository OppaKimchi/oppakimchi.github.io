import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Applied to production builds only, because Vite's dev server needs inline
// styles and a websocket that this policy would block.
const contentSecurityPolicy = [
  "default-src 'none'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "base-uri 'none'",
  "form-action 'none'",
].join("; ");

function securityHeaders(): Plugin {
  return {
    name: "security-meta-tags",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler: (html) => ({
        html,
        tags: [
          {
            tag: "meta",
            attrs: {
              "http-equiv": "Content-Security-Policy",
              content: contentSecurityPolicy,
            },
            injectTo: "head-prepend",
          },
        ],
      }),
    },
  };
}

export default defineConfig({
  base: "/",
  plugins: [react(), securityHeaders()],
});
