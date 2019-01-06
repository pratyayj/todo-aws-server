var messages = [
    "You are going to be okay in every sense",
    "Be kind, good and live a life for others",
    "Deshi basara"
]

exports.getRandomMessage = function() {
    return messages[Math.floor(Math.random() * messages.length)]
}
