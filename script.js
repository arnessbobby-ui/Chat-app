async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const messagesDiv = document.getElementById("messages");

  // Show user message
  messagesDiv.innerHTML += `<div><b>You:</b> ${userInput}</div>`;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();

    // Show AI response
    messagesDiv.innerHTML += `<div><b>AI:</b> ${data.reply}</div>`;
  } catch (error) {
    messagesDiv.innerHTML += `<div><b>AI:</b> Error connecting to server.</div>`;
  }
}
