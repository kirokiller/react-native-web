module.exports = {
  // 每行最多多少个字符换行
  printWidth: 80,
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 使用tab缩进，默认false
  useTabs: false,
  // 使用分号, 默认true
  semi: true,
  // 使用单引号, 默认false
  singleQuote: true,
  proseWrap: 'preserve',
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  arrowParens: 'avoid',
  // 对象中的空格 默认true
  bracketSpacing: true,
  // 确保使用的是 lf 的换行
  // endOfLine: 'auto',
  htmlWhitespaceSensitivity: 'ignore',
  // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  ignorePath: '.prettierignore',
  // JSX标签闭合位置 默认false
  jsxBracketSameLine: false,
  // JSX使用单引号
  jsxSingleQuote: false,
  // Require a 'prettierconfig' to format prettier
  requireConfig: false,
  stylelintIntegration: false,
  // 行尾逗号
  trailingComma: 'all',
  // 不让prettier使用ts的代码格式进行校验
  tslintIntegration: false
}
