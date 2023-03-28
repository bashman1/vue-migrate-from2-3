module.exports = {
  runtimeCompiler: true,

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Muse Vue Ant Design - by Creative Tim";
      return args;
    });
  },

  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8000/api",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
