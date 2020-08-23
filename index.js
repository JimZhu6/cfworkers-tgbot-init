// 此文件不使用本地 .env 变量
// BOT_TOKEN 和 SECRET_PATH 设置在 Workers 环境变量设置里
const { Telegraf } = require('telegraf');
const { Application, Router } = require('@cfworker/web');
const createTelegrafMiddware = require('cfworker-middware-telegraf');

const bot = new Telegraf(BOT_TOKEN);

// 写 bot 逻辑，但不要 `bot.launch()`
// bot 逻辑 start

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// bot 逻辑 end

const router = new Router();

// `/SECRET_PATH` 指的是一个不容易猜到的路径，以防止他人访问你的 webhook
router.post(`/${SECRET_PATH}`, createTelegrafMiddware(bot));

new Application().use(router.middleware).listen();
