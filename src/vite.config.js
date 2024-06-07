import path from "path";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    // server: {
    //     host: "0.0.0.0",
    //     hmr: {
    //         host: "127.0.0.1",
    //     },
    // },
    server: {
        host: "0.0.0.0",
        port: 5173,
        hmr: {
            protocol: "ws",
            host: "115.178.128.139",
        },
        cors: {
            origin: "*",
        },
    },
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js"),
        },
    },
});
