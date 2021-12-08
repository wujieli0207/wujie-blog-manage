module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  customSyntax: "postcss-html",
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  rules: {
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    "no-descending-specificity": null,
    // 禁止使用未知的伪元素选择器
    "selector-pseudo-element-no-unknown": null,
  },
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
      extends: ["stylelint-config-recommended", "stylelint-config-html"],
    },
  ],
};
