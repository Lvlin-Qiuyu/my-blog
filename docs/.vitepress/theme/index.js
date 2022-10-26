import DefaultTheme from 'vitepress/theme';
import './style/custom.css';
import Archives from './components/Archives.vue';

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        app.component("Archives", Archives);
    }
};