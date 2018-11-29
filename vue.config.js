module.exports = {
    devServer: {
        open: process.platform === 'darwin',
        host: 'local.tco.jd.com',
        port: 8089,
        https: false,
        hotOnly: false,
        proxy: {
            '/budget': {
                target: 'http://api.dev.budget.tco.jd.com/',
                changeOrigin: true
            }
        }, // string | Object
        before: app => {
            // `app` 是一个 express 实例
        }
    }
};
