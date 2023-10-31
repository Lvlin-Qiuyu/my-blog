import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Components from 'unplugin-vue-components/vite'
import { ArcoResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig(async ({ mode }) => {
    return {
        ssr: { noExternal: ['@arco-design/web-vue'] },
        build: {
            chunkSizeWarningLimit: 2000
        },
        plugins: [
            DefineOptions(),
            Components({ resolvers: [ArcoResolver()], deep: true }),
        ]
    }
})