const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {

    app.use(
        '/user',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      ),
      app.use(
        '/userevent',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      )
      ,
      app.use(
        '/publicevent',
        createProxyMiddleware({
          target: 'http://localhost:5000',
          changeOrigin: true,
        })
      )
      
         
      
    
    



    
}