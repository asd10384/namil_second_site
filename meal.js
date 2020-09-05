const request = require('request');
const cheerio = require('cheerio');

const url = "http://school.busanedu.net/bsnamil-h/main.do";

request(url, (error, response, body) => {
  if (error) throw error;

  let $ = cheerio.load(body);

  try {
    let jkcal = '';
    let jmeal = '';

    $('div.widgDiv.meal_menu1095').find('dl').each(function (index, elem) {
    jkcal = $(this).find('dt').text().trim();
    jmeal = $(this).find('dd').text().trim();

    console.log(`${jkcal}`);
    console.log(`${jmeal}`);
    });
  } catch (error) {
    console.error(error);
  }
});