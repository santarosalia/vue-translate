const fs = require('fs');
const translate = require('translate-google');

class Translator {
    constructor () {
        this.localesDir = './src/locales/';
        this.koSrc = this.localesDir + 'ko-KR/translation.json';
    }

    translate (to) {
        if (!fs.existsSync(this.koSrc)) fs.writeFileSync(this.koSrc,'{}');
        const koJson = fs.readFileSync(this.koSrc);
        const ko = JSON.parse(koJson);
        const koKeys = Object.keys(ko);

        const toLangSrc = `${this.localesDir}${to}/translation.json`;
        if (!fs.existsSync(toLangSrc)) fs.writeFileSync(toLangSrc,'{}');
        const toLangJson = fs.readFileSync(toLangSrc);
        const toLang = JSON.parse(toLangJson);
        const toLangKeys = Object.keys(toLang);

        const translateObject = {};

        koKeys.forEach((key)=>{
            if (!toLangKeys.includes(key) || toLang[key] === '') translateObject[key] = key;
        });

        if (Object.keys(translateObject).length != 0 ) {
            translate(translateObject,{to:to.split('-')[0],from : 'ko'}).then(res=>{
                Object.keys(res).forEach((key)=>{
                    if (!toLangKeys.includes(key) || toLang[key] === '') toLang[key] = res[key];
                });
                fs.writeFileSync(toLangSrc,JSON.stringify(toLang));
            });
            
        }
    }
}

const translator = new Translator;
translator.translate('en-US');

