const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
  config: {
    name: "owner",
    aliases: ["info", "profile"],
    author: "Alvee Evan Rocky",
    role: 0,
    shortDescription: "Show owner's profile",
    longDescription: "Shows a short personal profile of the owner.",
    category: "profile",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    const time = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

    const profile = `
『 𝗔𝗹𝘃𝗲𝗲 𝗘𝘃𝗮𝗻 𝗥𝗼𝗸𝘆 🧸』

• Name: Alvee Evan Rocky 🧸  
• Class: Deploma
• Group: Accounting  
• Gender: Male  
• DOB: 08-05-2005
• Religion: Sanatan
• Blood: o+ 
• Height: 5.5 ft  
• Location: Khoksa, Kushtia  
• Hobby: EDITOR & EYE LOVER
• Status: MINGLE
• FB: https://m.me/Alvee.Evan.Roky.Top.Bd.Voice.King
• IG: instagram.com/Alvee.Evan.Rocky
• Email: alveeevanroky320@gmail.com  

⏰ Time: ${time}`;

    api.sendMessage(profile, event.threadID, (err, info) => {
      if (err) return console.error(err);
      setTimeout(() => {
        api.unsendMessage(info.messageID);
      }, 20000); // 20 seconds = 20000 ms
    });
  }
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
