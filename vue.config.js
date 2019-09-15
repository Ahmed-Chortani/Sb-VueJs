module.exports = {
    devServer: {
      port: 8081,
      proxy: {
        "/api/user": {
          target: "http://localhost:8080",
          secure: false
        }
      }
    }
  };