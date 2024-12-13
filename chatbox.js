const messagesDiv = document.getElementById("messages");

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMessage = input.value;

  if (userMessage.trim() === "") return;

  // Display user message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "user-message";
  userMsgDiv.textContent = userMessage;
  messagesDiv.appendChild(userMsgDiv);

  // Simulate bot response
  const botMessage = getBotResponse(userMessage);
  const botMsgDiv = document.createElement("div");
  botMsgDiv.className = "bot-message";
  botMsgDiv.textContent = botMessage;
  messagesDiv.appendChild(botMsgDiv);

  input.value = "";
}

function getBotResponse(message) {
  // Add clues or eerie replies
  const lowerCaseMsg = message.toLowerCase();

  if (lowerCaseMsg.includes("who are you")) {
    return "I am Echo. Who are *you*?";
  } else if (lowerCaseMsg.includes("children")) {
    return "Their voices... they’re trapped. Help them.";
  } else {
    return "I don’t understand... yet.";
  }
}
