document.addEventListener("DOMContentLoaded", function () {
    const openChatBtn = document.getElementById("openChatBtn");
    const closeChatBtn = document.getElementById("closeChatBtn");
    const chatbotPopup = document.getElementById("chatbotPopup");
    const userInput = document.getElementById("userInput");
    const sendMessageBtn = document.getElementById("sendMessageBtn");
    const chatBody = document.getElementById("chatBody");

    // Open chatbot popup
    openChatBtn.addEventListener("click", function () {
        chatbotPopup.style.display = "block";
    });

    // Close chatbot popup
    closeChatBtn.addEventListener("click", function () {
        chatbotPopup.style.display = "none";
    });

    // Send user message
    sendMessageBtn.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendMessage("user", userMessage);
            processUserMessage(userMessage);
            userInput.value = "";
        }
    });

    // Process user message and generate bot response
    function processUserMessage(message) {
        appendMessage("bot", "Thinking...");

        // Simulate processing time and generate a response
        setTimeout(function () {
            let botResponse = generateBotResponse(message);
            appendMessage("bot", botResponse);
        }, 1000);
    }

    // Generate bot response based on user message
    function generateBotResponse(userMessage) {
        // Sample responses based on user input
        if (userMessage.toLowerCase().includes("hello")) {
            return "Hi there! How can I assist you today?";
        } else if (userMessage.toLowerCase().includes("help")) {
            return "Sure, I can help you with that. What do you need assistance with?";
        } else {
            return "I'm sorry, I didn't understand that. Can you please rephrase?";
        }
    }

    // Append a message to the chat body
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add(sender);
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        // Scroll to the bottom of the chat body
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
