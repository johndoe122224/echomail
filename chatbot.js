const messagesDiv = document.getElementById("messages");

function sendMessage() {
  const input = document.getElementById("user-input");
  const userMessage = input.value.trim();

  if (!userMessage) return;

  appendMessage("user-message", userMessage);
  const botMessage = getBotResponse(userMessage);
  appendMessage("bot-message", botMessage);

  input.value = "";
}

function appendMessage(className, message) {
  const messageDiv = document.createElement("div");
  messageDiv.className = className;
  messageDiv.textContent = message;
  messagesDiv.appendChild(messageDiv);
}

function getBotResponse(message) {
  const lowerCaseMsg = message.toLowerCase();

  if (lowerCaseMsg.includes("who are you")) {
    return "I am Echo. Who are *you*?";
  } else if (lowerCaseMsg.includes("children")) {
    return "Their voices... they’re trapped. Help them.";
  } else {
    return "I don’t understand... yet.";
  }
}
