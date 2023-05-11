import tailwindcss from "tailwindcss";
import path from "path";

export default (config, env, helpers, options) => {
  // tailwindcss
  const results = helpers.getLoadersByName(config, "postcss-loader");
  for (const result of results) {
    result.loader.options.postcssOptions.plugins = [
      tailwindcss("./tailwind.config.js"),

      ...result.loader.options.postcssOptions.plugins,
    ];
  }

  // import paths
  config.resolve.alias = {
    "@src": path.resolve(__dirname, "src"),

    ...config.resolve.alias,
  };

  return config;
};
