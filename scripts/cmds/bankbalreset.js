const Big = require('big.js');
const fs = require('fs');

module.exports = {
  config: {
    name: "bankbalreset",
    description: "Reset the bank balance of a user to a specific amount.",
    category: "economy",
    role: 2,
  },

  onStart: function ({ args, message, event }) {
   const { senderID } = event;

    const uid = args[0];
    const amount = args[1];

    if (senderID !== "100091901087288") {
      return message.reply("You are not authorized to use this command.");
    }

    if (!uid || !amount) {
      return message.reply("Please provide a user ID and an amount to reset the bank balance.");
    }

    const resetAmount = Big(amount);

    if (resetAmount.lte(0)) {
      return message.reply("The reset amount must be greater than zero.");
    }

    if (resetAmount.gt('1e104')) {
      return message.reply("The reset amount exceeds the maximum allowed amount (1e104).");
    }

    const bankData = JSON.parse(fs.readFileSync("scripts/cmds/bank.json", "utf8"));

    if (bankData[uid]) {
      bankData[uid].bank = resetAmount.toString();
      fs.writeFileSync("scripts/cmds/bank.json", JSON.stringify(bankData));
      return message.reply(`Successfully reset the bank balance of user with UID ${uid} to $${resetAmount.toString()}.`);
    } else {
      return message.reply("User not found in the bank data.");
    }
  },
};
