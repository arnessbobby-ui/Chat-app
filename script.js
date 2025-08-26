document.getElementById("sendBtn").addEventListener("click", async () => {
  const input = document.getElementById("userInput").value;
  const chatBox = document.getElementById("chatBox");

  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });

  const data = await res.json();

  if (data.reply) {
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
  } else {
    chatBox.innerHTML += `<p><strong>Bot:</strong> (No response)</p>`;
  }
});
