let userInput: unknown;
let userName: string;

userInput = 3;
userInput = "Alex";

if (typeof userInput === "string") {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw {
        message: message,
        errorCode: code,
    };
}

generateError("An error occured!", 500);
