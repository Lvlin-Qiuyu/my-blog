import DefaultTheme from 'vitepress/theme';
import './style/custom.css';
import Archives from './components/Archives.vue';
import Theme from "vitepress/theme";
import { h } from "vue";
import AnimateTitle from "./components/AnimateTitle.vue";

import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.component("Archives", Archives);
        app.use(ArcoVue);
        app.use(ArcoVueIcon);
    },
    Layout() {
        return h(Theme.Layout, null, {
            "home-hero-info": () => h(AnimateTitle)
        });
    },
};