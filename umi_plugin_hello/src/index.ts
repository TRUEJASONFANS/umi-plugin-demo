// ref:
// - https://umijs.org/plugin/develop.html
import { IApi } from 'umi-types';

export default function (api: IApi, options) {

  // Example: output the webpack config
  api.chainWebpackConfig(config => {
    console.log("zhong-wei:" +config.toString());
  });

  api.addHTMLHeadScript({
    content:'alert("Wow~~~ it works.")',
  });
}
