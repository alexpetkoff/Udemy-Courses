import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DummyData = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A T-shirt',
        amount: 29.79,
        date: new Date('2022-10-19'),
    },
    {
        id: 'e3',
        description: 'Groceries',
        amount: 99.56,
        date: new Date('2022-11-12'),
    },
    {
        id: 'e4',
        description: 'SoftUni course',
        amount: 229.99,
        date: new Date('2022-11-11'),
    },
]

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View>
            <ExpensesSummary expenses={DummyData} periodName={expensesPeriod} />
            <ExpensesList expenses={DummyData} />
        </View>
    )
}

export default ExpensesOutput;