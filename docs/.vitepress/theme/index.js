import theme from "vitepress/theme";
import "./tailwind.postcss";
import "./styles/custom.scss";
import "./styles/nav.scss";
import "./styles/aside.scss";
import NavCard from "../components/NavCard.vue";

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component("NavCard", NavCard);
  },
};
