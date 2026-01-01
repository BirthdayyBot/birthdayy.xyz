import development from "./settings-development.js";
import production from "./settings-production.js";

const settings = {
  development,
  production,
}[import.meta.env.MODE === "production" ? "production" : "development"];

export default settings;
