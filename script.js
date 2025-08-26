async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  const userMessage = document.createElement("div");
  userMessage.textContent = "You: " + message;
  chatBox.appendChild(userMessage);

  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    const botMessage = document.createElement("div");
    botMessage.textContent = "Bot: " + data.reply;
    chatBox.appendChild(botMessage);

  } catch (error) {
    console.error("Error:", error);
    const errorMessage = document.createElement("div");
    errorMessage.textContent = "Error: Unable to get response";
    chatBox.appendChild(errorMessage);
  }
}
