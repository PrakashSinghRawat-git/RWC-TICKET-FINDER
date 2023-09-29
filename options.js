require("dotenv").config();

module.exports = {
  urlObject: {
    IREvSA: "https://tickets.rugbyworldcup.com/en",
    IREvSCOT: "https://tickets.rugbyworldcup.com/en",
    IRE_QF_IF_WE_TOP_GROUP:
      "https://tickets.rugbyworldcup.com/en",
    IRE_QF_IF_WE_COME_2ND_IN_GROUP:
      "https://tickets.rugbyworldcup.com/en",
  },
  delay: 60000,
  telegram: {
    token: process.env["TELEGRAM_BOT_TOKEN"],
    chatId: process.env["CHAT_ID"],
    noTixChat: process.env["NO_TICKET_CHAT"],
  },
};
