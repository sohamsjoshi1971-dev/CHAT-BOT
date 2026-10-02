function sendMessage() {

            // Get user message
            let message = document.getElementById("userInput").value;

            // Display user message
            document.getElementById("chatbox").innerHTML +=
                "<p><b>You:</b> " + message + "</p>";

            
            message = message.toLowerCase();

            let reply = "";

            
            if (message == "hi" || message == "hii" || message == "hello") {

                reply = "Hello! How are you?";

            }
            else if (message == "how are you") {

                reply = "I am fine! How are you?";

            }
            else if (message == "what is your name") {

                reply = "My name is Smart Serve Ai.";

            }
            else if (message == "bye") {

                reply = "Goodbye! Have a nice day.";}


            else if (message == "Are you a robot?"){
                
                reply = "Yes, I am an AI assistant designed to help answer your questions."
            
            }

            else if (message == "What is your name?") {
            
                reply = "I don't have a personal name, but you can call me your AI assistant."

            }

            else if (message == "How are you?") {

                reply = "I don't have feelings, but I'm operating perfectly and ready to help!"

            }

            else if (message == "What can you do?") {

                reply = "I can answer questions, translate text, write summaries, and help you brainstorm ideas."

            }

            else if (message == "What is the capital of France?") {

                reply = "The capital of France is Paris."

            }

            else if (message == "Why is the sky blue?") {

                reply = "The sky is blue because gases in Earth's atmosphere scatter sunlight in all directions, and blue light is scattered more than other colors."

            }

            else if (message == "Give me a random number between 1 and 10.") {

                reply = "Your random number is 5."

            }

            else if (message == " Count from 1 to 5") {

                reply = "1, 2, 3, 4, 5."

            }

            else if (message == "What is 15 multiplied by 4?") {

                reply = "15 times 4 is 60"

            }

            else if (message == "Name three types of fruit.") {

                reply = "Apple, banana, and orange."

            }

            else if (message == "How many days are there in a standard year?") {

                reply = "There are 365 days in a standard year."

            }

            else if (message == "Give me a synonym for happy.") {

                reply = "A synonym for happy is joyful (or cheerful, glad, delighted)."

            }

            else if (message == "A farmer has 17 sheep. All but 9 die. How many sheep are left?") {

                reply = "9 sheep."

            }

            else if (message == "What is the next number in this sequence: 2, 4, 8, 16, ...?") {

                reply = "32 (The pattern multiplies the previous number by 2)."

            }

            else if (message == "I have keys but no locks. I have space but no room. You can enter but can't go outside. What am I?") {

                reply = "A keyboard."

            }

            else if (message == "Can you speak other languages?") {

                reply = "Yes, I can understand and reply in many different languages."

            }

            else if (message == "Say hello in Spanish.") {

                reply = "Hola!"

            }
            
            else if (message == "Thank you!") {

                reply = "You are very welcome! Happy to help."
                
            }
            else {

                reply = "Sorry, I don't understand that.";

            }

            
            document.getElementById("chatbox").innerHTML +=
                "<p><b>Bot:</b> " + reply + "</p>";

            
            document.getElementById("userInput").value = "";
        }