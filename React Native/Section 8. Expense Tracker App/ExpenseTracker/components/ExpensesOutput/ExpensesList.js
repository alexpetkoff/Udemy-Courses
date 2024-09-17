import { FlatList, Text } from "react-native";

function renderExpenseItem(itemData) {
    return <Text>{itemData.item.description}</Text>
}

function ExpensesList({ expenses }) {
    return (
        <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item) => item.id} />
    )
}

export default ExpensesList;





let resolvedPromises = [];

async function sequentialResolution(promises, order) {
    function resolvePromise(index) {
        return new Promise((resolve, reject) => {
            if (promises[index] !== 0) {
                resolve(promises[index]);
            } else {
                reject("Error");
            }
        });
    }

    for (let idx of order) {
        try {
            let result = await resolvePromise(idx - 1);
            resolvedPromises.push(result);
        } catch (error) {
            resolvedPromises.push("Error Thrown")
            break
        }
    }
}