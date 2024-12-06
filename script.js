// Defines the normal alphabet and a shifted alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var newalpha = "";
var action = "encrypt"; // Default action

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

// Encodes or decodes the message based on the new alphabet
function encode(message, action){
    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let index = alphabet.indexOf(char.toLowerCase());
        if (index !== -1) {
            if (action === "encrypt") {
                result += newalpha[index];
            } else if (action === "decrypt") {
                result += alphabet[newalpha.indexOf(char.toLowerCase())];
            }
        } else {
            result += char; // Non-alphabet characters are added as is
        }
    }
    return result;
}

// Processes the cipher based on user input
function processCipher() {
    let message = document.getElementById("message").value;
    let shiftValue = parseInt(document.getElementById("shift").value);
    let direction = document.getElementById("direction").value;
    
    shift(shiftValue, direction);
    let result = encode(message, action);
    document.getElementById("result").innerText = result;
}