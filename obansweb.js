// Add a heading
document.body.innerHTML = "<h1 style='color: red; font-family: Arial, sans-serif; text-align: center;'>It's my first JavaScript website!</h1>";

// Add an image
const img = document.createElement("img");
img.src = "chipi-chipi-chapa-chapa.gif"; // Replace with the actual path to your image
img.style.display = "block"; // Center the image
img.style.margin = "20px auto"; // Add spacing and center alignment
img.style.width = "300px"; // Optional: Set the width of the image
document.body.appendChild(img);

// Add an input field and a button
const inputContainer = document.createElement("div");
inputContainer.style.textAlign = "center"; // Center the input and button

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Type something here...";
input.style.marginRight = "10px"; // Add spacing between input and button

const button = document.createElement("button");
button.textContent = "Submit";

// Add an event listener to the button
button.addEventListener("click", () => {
    const userInput = input.value;
    if (userInput) {
        const outputContainer = document.createElement("div");
        outputContainer.style.textAlign = "center"; // Center the output and delete button

        const output = document.createElement("p");
        output.textContent = `You typed: ${userInput}`;
        output.style.color = "green";
        output.style.fontFamily = "Arial, sans-serif";
        output.style.display = "inline-block";
        output.style.marginRight = "10px";

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";

        // Add an event listener to the delete button
        deleteButton.addEventListener("click", () => {
            outputContainer.remove(); // Remove the text and delete button
        });

        outputContainer.appendChild(output);
        outputContainer.appendChild(deleteButton);
        document.body.appendChild(outputContainer);
    }
});

inputContainer.appendChild(input);
inputContainer.appendChild(button);
document.body.appendChild(inputContainer);

// Add an audio player
const audioContainer = document.createElement("div");
audioContainer.style.textAlign = "center"; // Center the audio player
audioContainer.style.marginTop = "20px"; // Add spacing above the audio player

const audio = document.createElement("audio");
audio.src = "carnivale.mp3"; // Replace with the actual path to your audio file
audio.controls = true; // Add playback controls (play, pause, etc.)
audioContainer.appendChild(audio);

document.body.appendChild(audioContainer);
