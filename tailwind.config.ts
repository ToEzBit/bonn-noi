import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "CascadiaCode",
      },
    },
  },
  plugins: [],
} satisfies Config;
