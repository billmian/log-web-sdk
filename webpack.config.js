const path = require("path");

module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/assets/", // string
    // 输出解析文件的目录，url 相对于 HTML 页面
    library: {
      type: "umd", // 通用模块定义
      name: "MyLibrary", // string | string[]
    },
  },
  module: {
    // 模块配置相关
    rules: [
      // 模块规则（配置 loader、解析器等选项）
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
    /* 高级模块配置（点击展示） */
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    // directories where to look for modules (in order)
    extensions: [".js", ".json", ".jsx", ".css"],
    // 使用的扩展名
    alias: {},
  },
  devtool: "source-map", // enum
  context: __dirname, // string（绝对路径！）
  target: "web", // 枚举
  plugins: [
    // ...
  ],
  optimization: {
    chunkIds: "size",
    // method of generating ids for chunks
    moduleIds: "size",
    // method of generating ids for modules
    mangleExports: "size",
    // rename export names to shorter names
    minimize: true,

    splitChunks: {},
  },
};
