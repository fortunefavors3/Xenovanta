import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink: "#090D18", panel: "#111827", gold: "#E8BD68", muted: "#9AA4B8" },
    boxShadow: { glow: "0 0 35px rgba(232,189,104,.18)" }
  }},
  plugins: []
};
export default config;
