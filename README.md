# 使用CloudFlare Workers部署Telegram-bot

> 参考文章：https://moe.best/tutorial/cfworker-telegraf-tgbot.html



## 初始化

项目根目录创建 `.env` 文件并填写好相关参数，参考 `.env.example` 文件。

bot 的逻辑写在`index.js`的指定区域内。（[参考文档](https://telegraf.js.org/#/)）

**注意：** `index.js` 文件内 `BOT_TOKEN` 、`SECRET_PATH` 这两个变量建议在 Workers 设置环境变量。



## 部署

执行 `npm run build` 进行打包，生成 `main.js` 文件（位于 `dist` 文件夹内）。

前往 https://workers.cloudflare.com/ 登陆，创建 Worker。将打包好的文件内容全部粘贴到脚本编辑器里，保存并部署。然后前往设置，设置好`BOT_TOKEN` 和 `SECRET_PATH`的环境变量。

回到本地，执行`npm run sethook`。

Done