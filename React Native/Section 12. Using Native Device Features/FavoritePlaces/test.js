function longestCommonSubsequence(text1, text2) {
    // Създаваме двумерен масив за динамичното програмиране
    const dp = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(0));
    console.table(dp)
    // Запълваме масива
    let resultString = ''
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                resultString += text1[j - 1]
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    console.table(resultString)

    // В dp[text1.length][text2.length] ще се съдържа дължината на LCS
    return dp[text1.length][text2.length];
}

// Пример за използване:
const text1 = "abcde";
const text2 = "ace";
console.log(longestCommonSubsequence(text1, text2));  // Изход: 3
