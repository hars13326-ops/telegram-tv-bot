const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8804458806:AAEJqNyzSlxOYuVfei99u68hX2G7m1XFhnQ";

const bot = new TelegramBot(TOKEN, {
  polling: true
});

const channels = [
  { name: "القناة 1", url: "http://live.zerolagvpn.com/hls/ch1/index.m3u8" },
  { name: "القناة 2", url: "http://live.zerolagvpn.com/hls/ch2/index.m3u8" },
  { name: "القناة 3", url: "http://live.zerolagvpn.com/hls/a_ch3/index.m3u8" },
  { name: "القناة 4", url: "http://live.zerolagvpn.com/hls/ch4/index.m3u8" },
  { name: "القناة 5", url: "http://live.zerolagvpn.com/hls/ch5/index.m3u8" },
  { name: "القناة 6", url: "http://live.zerolagvpn.com/hls/ch6/index.m3u8" },
  { name: "القناة 7", url: "http://live.zerolagvpn.com/hls/ch7/index.m3u8" },
  { name: "القناة 8", url: "http://live.zerolagvpn.com/hls/ch8/index.m3u8" },
  { name: "القناة 9", url: "http://t1.zerolagvpn.com/hls/ch9/index.m3u8" },
  { name: "القناة 10", url: "http://live.zerolagvpn.com/hls/ch10/index.m3u8" },
  { name: "القناة 11", url: "http://live.zerolagvpn.com/hls/ch11/index.m3u8" }
];

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "📺 اختر قناة:", {
    reply_markup: {
      inline_keyboard: channels.map(c => ([
        {
          text: c.name,
          url: c.url   // ✅ هنا التعديل المهم
        }
      ]))
    }
  });
});

console.log("Bot is running...");https://wa.me/message/YCH3CMCZXX3MN1

نتمنى لكم مشاهدة ممتعة 🌹`,
  {
    reply_markup: {
      inline_keyboard: keyboard
    }
  }
);
