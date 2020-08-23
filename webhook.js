// 部署完成 CloudFlare Workers 后在本地执行 `node botwebhook.js`

const Telegraf = require('telegraf');
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN);

// 设置 webhook，请改成你自己的回调地址
bot.telegram.setWebhook(`https://${process.env.WORKERS_SUBDOMAIN}/${process.env.SECRET_PATH}`).then(console.log);

// 删除 webhook
// bot.telegram.deleteWebhook().then(console.log);

// 查看当前 webhook
// bot.telegram.getWebhookInfo().then(console.log);