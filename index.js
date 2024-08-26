const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const dotenv = require('dotenv');


dotenv.config();
const botToken = process.env.BOT_TOKEN;
const webLink = process.env.WEB_LINK
console.log(botToken);
const bot = new Telegraf(botToken);


// bot.start((ctx) => ctx.reply('welcome', {
//     reply_markup: {
//         keyboard: [[{
//             text: 'باز کردن فروشگاه',
//             web_app: {
//                 url: webLink
//             }
//         }]]
//     }
// }))

bot.start((ctx) => ctx.reply('Welcome'))

bot.launch();