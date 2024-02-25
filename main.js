const TelegramBot = require("node-telegram-bot-api")
const token = "7162829949:AAHllmGfO0cDXL4rsB2_yq6LRrtIWG90cAk"
const option = {
    polling : true
}

const bot = new TelegramBot(token, option)
// bot.on("message", (msg) => console.log(msg.text,msg.from.username))
// const prefix = "."
const respon = {
    halo: "Haloo sayang, Selamat datang di Ija versi Romantis",
    curhat: "Ija selalu dengar apapun yang kamu ceritain",
    badmood: "Kamu badmood yah sayang, belii cokelat atau es krim mau?",
    mau: "Oke, Kamu bisa keluarin duit kamu terus jalan ke alfamart terdekat",
    makasih: "Sama sama, jika kamu butuh sesuatu datang saja padaku"


}
// const sayHai = new RegExp(`^${prefix}hallo$`)
// const curhat = new RegExp(`^${prefix}mau cerita$`)
bot.on('message', (callback) => { 
    const chatId =  callback.chat.id;
    const messageText =callback.text.toLowerCase()

    if (messageText.includes('halo') || messageText.includes('hai') || messageText.includes('helo')) {
        bot.sendMessage(chatId, respon.halo)
    } if (messageText.includes('curhat')) {
        bot.sendMessage(chatId, respon.curhat)
    } if (messageText.includes('badmood') || messageText.includes('gamood') || messageText.includes('bm')) {
        bot.sendMessage(chatId, respon.badmood)
    } else if (messageText.includes('mau') || messageText.includes('iyaa')) {
        bot.sendMessage(chatId, respon.mau)
    } if (messageText.includes('makasih') || messageText.includes('terima kasih')) {
        bot.sendMessage(chatId, respon.makasih)
    }
})