const fs = require("fs");


module.exports = {
  config: {
    name: "bank",
    description: "Deposit or withdraw money from the bank and earn interest",
    guide: {
      vi: "",
      en: "Bank:\nInterest - Balance - Withdraw - Deposit - Transfer - Richest - Loan - Payloan - Lottery - Gamble - HighRiskInvest - Heist"
    },
    category: "Money",
    countDown: 0,
    role: 0,
    author: "Loufi | JARiF |Samuel"
  },
  onStart: async function ({ args, message, event,api, usersData }) {
    const { getPrefix } = global.utils;
    const p = getPrefix(event.threadID);

    const userMoney = await usersData.get(event.senderID, "money");
    const user = parseInt(event.senderID);
    const info = await api.getUserInfo(user);
      const username = info[user].name;
    const bankData = JSON.parse(fs.readFileSync("./bank.json", "utf8"));

    if (!bankData[user]) {
      bankData[user] = { bank: 0, lastInterestClaimed: Date.now() };
      fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    }

    const command = args[0]?.toLowerCase();
    const amount = parseInt(args[1]);
    const recipientUID = parseInt(args[2]);

    switch (command) {
      case "deposit":
  const depositPassword = args[1]; // Get the password
  const depositAmount = parseInt(args[2]); // Get the amount

  if (!depositPassword || !depositAmount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• please provide both\n password and valid\n amount to deposit.|🔑\n\n╚────⊢✭⊣────╝");
  }

  if (bankData[user].password !== depositPassword) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Incorrect password\n Please try again.|🔑\n\n╚────⊢✭⊣────╝");
  }

  if (isNaN(depositAmount) || depositAmount <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Please enter a valid\n deposit amount.|💸\n\n╚────⊢✭⊣────╝");
  }

  if (userMoney < depositAmount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• You don't have the\n required amount|❌\n\n╚────⊢✭⊣────╝");
  }

  bankData[user].bank += depositAmount;
  await usersData.set(event.senderID, {
    money: userMoney - depositAmount
  });
  fs.writeFileSync("./bank.json", JSON.stringify(bankData));

  return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Successfully deposited ${depositAmount}$ into your bank account.\n\n╚────⊢✭⊣────╝`);


      case "withdraw":
  const withdrawPassword = args[1]; 
  const withdrawAmount = parseInt(args[2]); 

  if (!withdrawPassword || !withdrawAmount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Please provide both a password and a valid amount for withdrawal.🔑\n\n╚────⊢✭⊣────╝");
  }

  if (bankData[user].password !== withdrawPassword) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n✧Incorrect password. Please try again.🔑\n\n╚────⊢✭⊣────╝");
  }

  const balance = bankData[user].bank || 0;

  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|Please enter a valid withdrawal amount.💸\n\n╚────⊢✭⊣────╝");
  }

  if (withdrawAmount > balance) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• The requested amount is greater than the available balance in your bank account.👽\n\n╚────⊢✭⊣────╝");
  }

  bankData[user].bank = balance - withdrawAmount;
  await usersData.set(event.senderID, {
    money: userMoney + withdrawAmount
  });
  fs.writeFileSync("./bank.json", JSON.stringify(bankData));

  return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Successfully withdrew ${withdrawAmount}$ from your bank account.\n\n╚────⊢✭⊣────╝`);

        case "invest":
  const investmentAmount = parseInt(args[1]);

  if (isNaN(investmentAmount) || investmentAmount <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Please enter a valid investment amount.💸\n\n╚────⊢✭⊣────╝");
  }

  const riskOutcome = Math.random() < 0.7; 
  const potentialReturns = investmentAmount * (riskOutcome ? 2 : 0.2); 

  if (riskOutcome) {
    bankData[user].bank -= investmentAmount;
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Your high-risk investment of ${investmentAmount}$ was risky, and you lost your money. 😔\n\n╚────⊢✭⊣────╝`);
  } else {
    bankData[user].bank += potentialReturns;
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Congratulations! Your high-risk investment of ${investmentAmount}$ paid off, and you earned ${potentialReturns}$ in returns! 🎉\n\n╚────⊢✭⊣────╝`);
  }


        case "gamble":
  const betAmount = parseInt(args[1]);

  if (isNaN(betAmount) || betAmount <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Please enter a valid amount to bet.💸\n\n╚────⊢✭⊣────╝");
  }

  if (userMoney < betAmount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|You don't have enough money to place that bet.🙅‍♂️\n\n╚────⊢✭⊣────╝");
  }

  const winChance = 0.4;
  const isWin = Math.random() < winChance;

  if (isWin) {
    const winnings = betAmount * 2; 
    bankData[user].bank += winnings;
    await usersData.set(event.senderID, {
      money: userMoney - betAmount + winnings
    });
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n✧Congratulations! You've won ${winnings}$! 🎉\n\n╚────⊢✭⊣────╝`);
  } else {
    bankData[user].bank -= betAmount;
    await usersData.set(event.senderID, {
      money: userMoney - betAmount
    });
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Oh no! You've lost ${betAmount}$ in the gamble. 😢\n\n╚────⊢✭⊣────╝`);
  }
        case "heist":
  const heistSuccessChance = 0.2; 
  const heistWinAmount = 1000; 
  const heistLossAmount = 500; 

  const isSuccess = Math.random() < heistSuccessChance;

  if (isSuccess) {
    const winnings = heistWinAmount;
    bankData[user].bank += winnings;
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦  •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦]\n\n•Bank heist successful! You've won ${winnings}$! 💰\n\n╚────⊢✭⊣────╝`);
  } else {
    const lossAmount = heistLossAmount;
    bankData[user].bank -= lossAmount;
    fs.writeFileSync("./bank.json", JSON.stringify(bankData));
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Bank heist failed! You've lost ${lossAmount}$! 😔\n\n╚────⊢✭⊣────╝`);
  }
      case "balance":
        const bankBalance = bankData[user].bank !== undefined && !isNaN(bankData[user].bank) ? bankData[user].bank : 0;
        return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Your bank balance is: ${bankBalance}$ •\n•To withdraw money.\n• type:\n•${p}Bank Withdraw 'your withdrawal amount'•\n•To earn interest\n•type:\n•${p}Bank Interest•\n\n╚────⊢✭⊣────╝`);

      case "interest":
        const interestRate = 0.001; 
        const lastInterestClaimed = bankData[user].lastInterestClaimed || Date.now();
        const currentTime = Date.now();
        const timeDiffInSeconds = (currentTime - lastInterestClaimed) / 1000;
        const interestEarned = bankData[user].bank * (interestRate / 970) * timeDiffInSeconds;
        if (bankData[user].bank <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•You don't have any money in your bank account to earn interest.💸🤠\n\n╚────⊢✭⊣────╝");
        }

        bankData[user].lastInterestClaimed = currentTime;
        bankData[user].bank += interestEarned;

        fs.writeFileSync("./bank.json", JSON.stringify(bankData));

        return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•You have earned interest of ${interestEarned.toFixed(2)} $ . It has been successfully added to your account balance..✅\n\n╚────⊢✭⊣────╝`);
        case "lottery":
        const lotteryTicketPrice = 100;
        const lotteryTicketCount = parseInt(args[1]);

        if (isNaN(lotteryTicketCount) || lotteryTicketCount <= 0) {
          return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•Please enter a valid number of lottery tickets to buy.🎫\n\n╚────⊢✭⊣────╝");
        }

        const totalCost = lotteryTicketPrice * lotteryTicketCount;

        if (userMoney < totalCost) {
          return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•You don't have enough money to buy that many lottery tickets.🙅‍♂️\n\n╚────⊢✭⊣────╝");
        }
        const lotteryResults = [];
        for (let i = 0; i < lotteryTicketCount; i++) {
          const randomNumber = Math.floor(Math.random() * 100) + 1;
          lotteryResults.push(randomNumber);
        }

        const totalWinnings = lotteryResults.filter(number => number >= 50).length * 50;

        await usersData.set(event.senderID, {
          money: userMoney - totalCost + totalWinnings
        });

        return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n•You've bought ${lotteryTicketCount} lottery tickets and won ${totalWinnings}$ in total!🎉\n\n╚────⊢✭⊣────╝`);
      case "transfer":
        const senderBalance = bankData[user].bank || 0;

        if (isNaN(amount) || amount <= 0) {
          return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❗|Please enter the amount you want to transfer...♻️\n\n╚────⊢✭⊣────╝");
        }

        if (senderBalance < amount) {
          return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦]\n\n• The amount is not available in your bank account•\n\n╚────⊢✭⊣────╝");
        }

        if (isNaN(recipientUID)) {
          return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Please write:\n• ${p}Bank Transfer followed by the\n amount and the recipient's ID ${uid}\n• Example:\n• ${p}Bank Transfer 5000 289272210979\n\n╚────⊢✭⊣────╝`);
        }

        if (!bankData[recipientUID]) {
          bankData[recipientUID] = { bank: 0, lastInterestClaimed: Date.now() };
          fs.writeFileSync("./bank.json", JSON.stringify(bankData));
        }

        bankData[user].bank -= amount;
        bankData[recipientUID].bank += amount;

        fs.writeFileSync("./bank.json", JSON.stringify(bankData));

        const Ruser = await api.getUserInfo(recipientUID);
      const Rname = Ruser[recipientUID].name;
        const recipientMessage = `╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• You have received ${amount}$\nFrom:\n• Name: ${username}\n• BankID: ${user}.\n• Your current Bank balance:\n${bankData[recipientUID].bank}$\n\n• ★𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌★ Database✅\n\n╚────⊢✭⊣────╝`;
  await api.sendMessage(recipientMessage, recipientUID);
        return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ✅|Successfully deducted ${amount}$ from your account and transferred to Recipient Account\n\n-Recipient Info-\n• Name: ${Rname}\n• BankID: ${recipientUID}\n\n• ★𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌★ Database|✅\n\n╚────⊢✭⊣────╝`);


      case "richest":
        const bankDataCp = JSON.parse(fs.readFileSync('./bank.json', 'utf8'));

        const topUsers = Object.entries(bankDataCp)
          .sort(([, a], [, b]) => b.bank - a.bank)
          .slice(0, 25);

        const output = (await Promise.all(topUsers.map(async ([userID, userData], index) => {
          const userName = await usersData.getName(userID);
          return `[${index + 1}. ${userName}]`;
        }))).join('\n');

        return message.reply("╔────⊢✭⊣────╗\n\nRichest people in the world\n\n•𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• \nsystem👑🤴:\n──────────────\n\n╚────⊢✭⊣────╝" + output);

        case "setpassword":
  const newPassword = args[1];
  if (!newPassword) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|Please provide a new password to set.|🔑\n\n╚────⊢✭⊣────╝");
  }
  bankData[user].password = newPassword;
  fs.writeFileSync("./bank.json", JSON.stringify(bankData));
  return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ✅|Your password has been set successfully.|🔑\n\n╚────⊢✭⊣────╝");

case "changepassword":
  const currentPassword = args[1];
  const newPwd = args[2]; // Rename the variable to 'newPwd'

  if (!currentPassword || !newPwd) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|Please provide your current password\n and a new password to change.|🔑\n\n╚────⊢✭⊣────╝");
  }

  if (bankData[user].password !== currentPassword) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|Incorrect current password.\nPlease try again.|🔑\n\n╚────⊢✭⊣────╝");
  }
  bankData[user].password = newPwd; // Use the renamed variable 'newPwd'
  fs.writeFileSync("./bank.json", JSON.stringify(bankData));
  return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ✅|Your password has been changed successfully.|🔑\n\n╚────⊢✭⊣────╝");

case "removepassword":
  if (!bankData[user].password) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦]\n\n• ❗|You do not have a password set for your account.|🔒\n\n╚────⊢✭⊣────╝");
  }
  bankData[user].password = null;
  fs.writeFileSync("./bank.json", JSON.stringify(bankData));
  return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ✅|Your password has been \n removed successfully.|🔒\n\n╚────⊢✭⊣────╝");


    case "loan":
    const maxLoanAmount = 4000;
    const userLoan = bankData[user].loan || 0;
    const loanPayed = bankData[user].loanPayed !== undefined ? bankData[user].loanPayed : true;

    if (!amount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|Please enter a valid loan amount..❗\n\n╚────⊢✭⊣────╝");
  }

  if (amount > maxLoanAmount) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|The maximum loan amount is 4000 ‼️\n\n╚────⊢✭⊣────╝");
  }

  if (!loanPayed && userLoan > 0) {
    return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ❌|You cannot take a new loan \nuntil you pay off your current loan..|🌚\nYour current loan to pay is: ${userLoan}$ \n\n╚────⊢✭⊣────╝`);
  }

  bankData[user].loan = userLoan + amount;
  bankData[user].loanPayed = false;
  bankData[user].bank += amount;

  fs.writeFileSync("./bank.json", JSON.stringify(bankData));

  return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• You have successfully taken a loan of ${amount}$\n  Please note that loans must be repaid within a certain period.|🥰\n\n╚────⊢✭⊣────╝`);


           case "payloan":
  const loanBalance = bankData[user].loan || 0;

  if (isNaN(amount) || amount <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Please enter a valid amount to repay your loan..|❗\n\n╚────⊢✭⊣────╝");
  }

  if (loanBalance <= 0) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• ✧You don't have any pending loan payments.|😄\n\n╚────⊢✭⊣────╝");
  }

  if (amount > loanBalance) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• The amount required to pay off the loan is greater than your due amount. Please pay the exact amount.|😊\nYour total loan: ${loanBalance}$ \n\n╚────⊢✭⊣────╝");
  }

  if (amount > userMoney) {
    return message.reply("╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• You do not have ${amount}$ in your balance to repay the loan.|❌\n• Type ${p}bal\n• to view your current main balance..|😞\n\n╚────⊢✭⊣────╝");
  }

  bankData[user].loan = loanBalance - amount;

  if (loanBalance - amount === 0) {
    bankData[user].loanPayed = true;
  }

  await usersData.set(event.senderID, {
    money: userMoney - amount
  });


  fs.writeFileSync("./bank.json", JSON.stringify(bankData));

  return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Successfully repaid ${amount}$ towards your loan.|✅\n\n• to check type:\n• ${p}bank balance\n\n• And your current loan to pay: ${bankData[user].loan}$ \n\n╚────⊢✭⊣────╝`);


default:
        return message.reply(`╔────⊢✭⊣────╗\n\n🏦 •𝑾𝒂𝒍𝒆𝒙 𝑩𝒂𝒏𝒌• 🏦\n\n• Please use one of the following commands• \n• ${p}Bank Deposit\n• ${p}Bank Withdraw\n• ${p}Bank Balance\n• ${p}Bank Interest\n• ${p}Bank Transfer\n• ${p}Bank Richest\n• ${p}Bank Loan\n• ${p}Bank PayLoan\n• ${p}Bank invest\n• ${p}Bank Gamble\n• ${p}Bank Heist\n• ${p}Bank Lottery\n\n ===[🏦 Password 🏦]===\n• Please add password for secure your bank account\n\n• ${p}Bank setpassword\n• ${p}Bank changepassword\n• ${p}Bank removepassword\n\n╚────⊢✭⊣────╝`);
    }
  }
};


