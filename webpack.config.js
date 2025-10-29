import { resolve } from "node:path"

const outputDir = resolve(process.cwd(), 'dist')
const webpackConfig =  {
  entry: './src/index.js',
  mode: "development",
  output: {
        filename: './index.js',
        path: outputDir,
    },
    devServer: {
        host: "localhost",
        port: 3000,
    },
};
export default webpackConfig;