import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
function inline3DAssets() {
  const inline = /\.(bin|glb|gltf)$/i;

  const setInline = (req, res, next) => {
    const path = req.url?.split("?")[0] ?? "";
    if (inline.test(path)) {
      res.setHeader("Content-Disposition", "inline");
    }
    next();
  };

  return {
    name: "inline-3d-assets",
    configureServer(server) {
      server.middlewares.use(setInline);
    },
    configurePreviewServer(server) {
      server.middlewares.use(setInline);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inline3DAssets()],
  assetsInclude: ["**/*.glb", "**/*.gltf"],
});
