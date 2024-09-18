import { createContext, useReducer } from "react";

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
    {
        id: 'e5',
        description: 'SoftUni course 2',
        amount: 229.99,
        date: new Date('2024-09-15'),
    }
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    removeExpense: (id) => { },
    editExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {

    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state];

        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload);

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

    const [expensesState, dispatch] = useReducer(expensesReducer, DummyData);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'REMOVE', payload: id });
    }

    function editExpense(id, expenseData) {
        dispatch({ type: 'EDIT', payload: { id, ...expenseData } });
    }

    const value = {
        expenses: expensesState,
        addExpense,
        deleteExpense,
        editExpense
    };

    return <ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
