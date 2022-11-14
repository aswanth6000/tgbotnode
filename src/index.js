const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, {polling: true});

// bot.on('message', (msg) => {
//     // const chatId = msg.chat.id;
  
//     console.log(msg);
//     // bot.sendMessage(chatId, 'Received your message');
//   });
// bot.onText(/\/start/, (msg) => {

//     bot.sendMessage(msg.chat.id, "Welcome"+ );

    
//     });
bot.onText(/\/help/, (msg) => {

    bot.sendMessage(msg.chat.id, "<b>COMMANDS</b>\n \n/start start the bot \n/connect Links \n/help Help \n/insta Instagram \n/fb Facebook \n/web Website \n/snap Snapchat",{parse_mode : "HTML"});
    
    });
    bot.onText(/\/connect/, (msg) => {

        bot.sendMessage(msg.chat.id, "NO LINKS AVAILABLE");
        
        });
    bot.onText(/\/insta/, (msg) => {

        bot.sendMessage(msg.chat.id, "Instagram:https://www.instagram.com/bateman.gfx/");
        
        });
    bot.onText(/\/fb/, (msg) => {

        bot.sendMessage(msg.chat.id, "Facebook:https://www.facebook.com/aswanth.alakadan");
        
        });
    bot.onText(/\/web/, (msg) => {

        bot.sendMessage(msg.chat.id,"Website:https://bit.ly/3w4ltxF");
        
        });
    bot.onText(/\/snap/, (msg) => {

        bot.sendMessage(msg.chat.id,"Snapchat:https://www.snapchat.com/add/aswanth6000?share_id=NIfSlYjfwuM&locale=en-IN");
        
        });
        bot.onText(/\/start/, (msg) => {

            bot.sendMessage(msg.chat.id, "Welcome " +msg.from.first_name, {
            "reply_markup": {
                "keyboard": [["/help",]  ]
                }
            });
            
            });



