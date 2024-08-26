const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const dotenv = require('dotenv');
const express = require('express');


dotenv.config();
const app = express();
const port = process.env.PORT;
const botToken = process.env.BOT_TOKEN;
const webLink = process.env.WEB_LINK;

const bot = new Telegraf(botToken);
app.use(express.json());

app.get('*', async (req, res) => {
    res.send('hello get');
    console.log(req.body);
});
app.post('*', async (req, res) => {
    res.send('hello get');
});

app.listen(port, function () {
    console.log(`app is running on port ${port}`);
});


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