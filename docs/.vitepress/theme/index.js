import theme from "vitepress/theme";
import "./tailwind.postcss";
import "./styles/custom.css";
import NavCard from "../components/NavCard.vue";

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component("NavCard", NavCard);
  },
};
