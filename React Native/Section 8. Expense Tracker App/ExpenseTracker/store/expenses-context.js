import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: ({ expenses }) => { },
    removeExpense: (id) => { },
    editExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':

            return [{ ...action.payload }, ...state];

        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload);

        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;

        case 'EDIT':
            const { id: expenseId, description, amount } = action.payload;

            return state.map((item) => {
                if (item.id === expenseId) {
                    return { ...item, description, amount };
                }
                return item;
            });

        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {

    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'REMOVE', payload: id });
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses })
    }

    function editExpense(id, expenseData) {
        dispatch({ type: 'EDIT', payload: { ...expenseData, id } });
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        editExpense,
        setExpenses
    };

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
