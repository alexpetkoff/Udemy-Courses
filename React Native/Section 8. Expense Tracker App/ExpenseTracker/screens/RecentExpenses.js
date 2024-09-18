import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {

    const expensesCtx = useContext(ExpensesContext);

    const recentExpences = expensesCtx.expenses.filter((expenses) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expenses.date > date7DaysAgo;
    })

    return <ExpensesOutput expenses={recentExpences} expensesPeriod="Last 7 days" />
}

export default RecentExpenses;