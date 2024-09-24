import { useEffect, useState, useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from "../store/expenses-context";

import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/ErrorOverlay";

function RecentExpenses() {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState()
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {
        async function getExpenses() {
            setIsLoading(true);
            try {
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses)
            } catch (error) {
                setError('Could not fetch expenses!')
            }
            setIsLoading(false);
        }

        getExpenses();
    }, []);

    function errorHandler() {
        setError(null);
    }

    if (isLoading) {
        return <LoadingOverlay />
    }

    if (error && !isLoading) {
        return <ErrorOverlay message={error} onConfirm={errorHandler} />
    }

    const recentExpences = expensesCtx.expenses.filter((expenses) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expenses.date > date7DaysAgo
    });

    return <ExpensesOutput expenses={recentExpences} expensesPeriod="Last 7 days" />
}

export default RecentExpenses;