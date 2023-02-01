const fs = require('fs');
const translate = require('translate-google');

const koSrc = './src/locales/ko.json';
const enSrc = './src/locales/en.json';

const koJson = fs.readFileSync(koSrc);
const enJson = fs.readFileSync(enSrc);

const ko = JSON.parse(koJson);
const en = JSON.parse(enJson);

const koKeys = Object.keys(ko);
const enKeys = Object.keys(en);



koKeys.forEach((key)=>{
    if (!enKeys.includes(key)) {
        en[key] = key;
    }
});

translate(en,{to:'en'}).then(res=>{
    fs.writeFileSync(enSrc,JSON.stringify(res))
});