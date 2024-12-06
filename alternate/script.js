// Defines the normal alphabet and a shifted alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";

// Checks if user wants to encode or decode
document.getElementById('encrypt_button').addEventListener('click', function() {
    action = "encrypt";
    document.getElementById("encrypt_or_decrypt_button").innerHTML = "Encrypt";
});

document.getElementById('decrypt_button').addEventListener('click', function() {
    action = "decrypt";
    document.getElementById("encrypt_or_decrypt_button").innerHTML = "Decrypt";
});



// Function to shift the alphabet based on what the user wants
function shift(n, direction){
    newalpha = ""; // The new alphabet gets reset each time
    if (direction === "left") {
        n = alphabet.length - n; // Shifts to the left by subtracting the shift value from the length of the alphabet
    }
    for (let i = 0; i < alphabet.length; i++){
        let offset = (i + n) % alphabet.length;
        newalpha += alphabet[offset];
    }
}

// Encodes the message based on the new alphabet
function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        if (index !== -1) {
            result += newalpha[index];
        } else {
            result += message[i]; // Keep non-alphabet characters unchanged
        }
    }
    return result;
}

// Assigns the inputs to variables and uses them in the shifting and encoding functions
function processCipher() {
    let message = document.getElementById("message").value;
    let shiftValue = parseInt(document.getElementById("shift").value);
    let direction = document.getElementById("direction").value;
    shift(shiftValue, direction);
    let encodedMessage = encode(message);
    document.getElementById("result").innerText = "Encoded Message: " + encodedMessage;
}