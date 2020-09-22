// browserify.cmd jj.js -o meal.js

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const session = require('express-session');

const url = "http://bsnamil.hs.kr/bsnamil-h/main.do";

request(url, (error, response, body) => {
    if (error) throw error;

    let $ = cheerio.load(body);

    try {
        let jkcal = '';
        let jmeal = '';

        $('div.widgDiv.meal_menu1095').find('dl').each(function (index, elem) {
            jkcal = $(this).find('dt.kcal span').text().trim();
            jmeal = $(this).find('dd').text().trim();

            console.log(`${jkcal}`);
            console.log(`${jmeal}`);

            const jskcal = `${jkcal}`
            const jsmeal = `${jmeal}`

            fs.writeFileSync("meal.txt", jskcal + "!" + jsmeal, {encoding: 'utf8'});
        });
    } catch (error) {
        console.error(error);
    }
});