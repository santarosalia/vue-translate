const path = require('path');

const COMMON_EXTENSIONS = '/**/*.{js,jsx,ts,tsx,vue,html}';


module.exports = {
  input: [`./src${COMMON_EXTENSIONS}`],
  options: {
    defaultLng: 'ko-KR',
    lngs: ['ko-KR', 'en-US'],
    func: {
      list: ['window.app.t','t'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.html'],
    },
    resource: {
      loadPath: path.join(__dirname, './src/locales/{{lng}}/{{ns}}.json'),
      savePath: path.join(__dirname, './src/locales/{{lng}}/{{ns}}.json'),
    },
    defaultValue(lng, ns, key) {
      const keyAsDefaultValue = ['ko-KR'];
      if (keyAsDefaultValue.includes(lng)) {
        const separator = '~~';
        const value = key.includes(separator) ? key.split(separator)[1] : key;

        return value;
      }

      return '';
    },
    keySeparator: false,
    nsSeparator: false,
    prefix: '%{',
    suffix: '}',
  },
};