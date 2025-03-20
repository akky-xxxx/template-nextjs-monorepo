module.exports = {
  version: '0.2',

  ignoreRegExpList: [
    'x-stoplight:\\n\\s+id: .+$', // stoplight studio が発行する x-stoplight > id の値を一律に除外
  ],
  language: 'en',
};
