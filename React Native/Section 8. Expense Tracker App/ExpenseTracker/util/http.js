import axios from "axios";

const URL = 'https://expense-tracker-54856-default-rtdb.europe-west1.firebasedatabase.app/'

export async function storeExpense(expenseData) {
    const response = await axios.post(URL + 'expenses.json', expenseData);
    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(URL + 'expenses.json');

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj);
    }

    return expenses;
}

export function deleteExpense(id) {
    return axios.delete(URL + `expenses/${id}.json`);
}

export function updateExpense(id, expenseData) {
    return axios.put(URL + `expenses/${id}.json`, expenseData)
}