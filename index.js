const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');


dotenv.config();
const app = express();
const port = process.env.PORT;
const botToken = process.env.BOT_TOKEN;
const webLink = process.env.WEB_LINK;

const bot = new Telegraf(botToken);
app.use(express.json());

// app.use(cors({
//     credentials: true,
//     origin: ['https://testbotuifrontend.onrender.com',
//         'http://localhost:5005'
//     ],
//     methods: ['GET', 'POST', 'DELETE', 'PATCH'],
// }));

app.use('*', cors())

app.get('*', async (req, res) => {
    res.send('hello get');
    console.log(req.body);
});
app.post('*', async (req, res) => {
    const text = req.body;
    console.log(text);
    res.status(200).json({ message: 'hellooooooo' })
    console.log('object');
});

app.listen(port, function () {
    console.log(`app is running on port ${port}`);
});

// app.use('/', (req, res) => {
//     res.send('hi')
// })


bot.start((ctx) => ctx.reply('welcome', {
    reply_markup: {
        keyboard: [[{
            text: 'باز کردن فروشگاه',
            web_app: {
                url: webLink
            }
        }]]
    }
}))


bot.launch();