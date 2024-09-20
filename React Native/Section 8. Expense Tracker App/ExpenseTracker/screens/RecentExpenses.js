import { useEffect, useState, useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from "../store/expenses-context";

function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);


    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            expensesCtx.setExpenses(expenses)
        }

        getExpenses();
    }, []);

    const recentExpences = expensesCtx.expenses.filter((expenses) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expenses.date > date7DaysAgo
    });

    return <ExpensesOutput expenses={recentExpences} expensesPeriod="Last 7 days" />
}

export default RecentExpenses;