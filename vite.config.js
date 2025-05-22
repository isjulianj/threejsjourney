import restart from 'vite-plugin-restart'

export default {
    // config options
    root: './src',
    publicDir: '../static/',
    base: './',
    server: {
        port: 6969,
        open: true,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:5000',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    },
    build: {
        outDir: './build',
        emptyOutDir: true,
        sourcemap: true,
    },
    plugins: [
        restart({restart: ['../static/**', ]})
    ]
}