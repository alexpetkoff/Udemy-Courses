type Combinable = number | string;
type ConversionDesc = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDesc
) {
    let result: string | number;

    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (resultConversion === "as-number") {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAges = combine(30, 26, "as-number");

console.log(combinedAges);
