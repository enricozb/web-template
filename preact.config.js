import tailwindcss from "tailwindcss";

export default (config, env, helpers, options) => {
  const results = helpers.getLoadersByName(config, "postcss-loader");

  for (const result of results) {
    console.log("hello", result.loader.options);

    result.loader.options.postcssOptions.plugins = [
      tailwindcss("./tailwind.config.js"),

      ...result.loader.options.postcssOptions.plugins,
    ];
  }
};
