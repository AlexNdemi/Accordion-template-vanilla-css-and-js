import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";

export default {
  css: {
    postcss: {
      plugins: [
        cssnano({
          preset: "default",
        }),
        postcssPresetEnv({ stage: 3 }),
      ],
    },
  },
};
