import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

import IconButton from "../UI/IconButton";
import Button from "../UI/Button";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";

function ManageExpense({ route, navigation }) {

    const context = useContext(ExpensesContext);
    const id = route.params?.expenseId;

    const filterExpense = context.expenses.filter((expense) =>
        expense.id === id
    );

    const [inputValues, setInputValues] = useState({
        description: !!id ? filterExpense?.[0]?.description : '',
        amount: !!id ? filterExpense?.[0]?.amount : 0,
        date: !!id ? filterExpense?.[0]?.date : new Date(),
    });

    const [errors, setErrors] = useState({
        descriptionError: '',
        amountError: '',
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: !!id ? 'Edit Expense' : 'Add Expense',
        })
    }, [navigation, id]);


    async function deleteExpenseHandler() {
        deleteExpense(id);
        context.deleteExpense(id);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler() {

        if (!inputValues.description || !inputValues.amount) {
            setErrors({
                descriptionError: !inputValues.description ? 'Please enter a description' : '',
                amountError: !inputValues.amount ? 'Please enter an amount' : '',
            })
            return;
        }

        if (Number(inputValues.amount) <= 0) {
            return;
        }

        if (!!id) {
            updateExpense(id, inputValues)
            context.editExpense(id, inputValues);
        } else {
            const id = await storeExpense(inputValues);
            context.addExpense({ ...inputValues, id: id });
        }

        navigation.goBack();
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                    <Button style={styles.button} onPress={confirmHandler}>{!!id ? 'Update' : 'Add'}</Button>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Description</Text>
                    <TextInput
                        defaultValue={!!id ? filterExpense?.[0]?.description : ''}
                        multiline={true}
                        numberOfLines={5}
                        placeholder="Expense description"
                        maxLength={255}
                        autoCorrect={false} //default is true
                        onChangeText={(text) => setInputValues({ ...inputValues, description: text })}
                        style={styles.inputField} />
                    <Text style={styles.inputLabel}>Amount</Text>
                    <TextInput
                        defaultValue={!!id ? filterExpense?.[0]?.amount?.toString() : ''}
                        onChangeText={(text) => setInputValues({ ...inputValues, amount: Number(text.replace(',', '.')) })}
                        keyboardType="decimal-pad"
                        textContentType="number"
                        autoCorrect={false} //default is true
                        style={styles.inputField}
                    />
                </View>
                {
                    !!id &&
                    <View style={styles.deleteContainer}>
                        <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={() => deleteExpenseHandler(id)} />
                    </View>
                }
                {errors.descriptionError && <Text style={styles.errorText}>{errors.descriptionError}</Text>}
                {errors.amountError && <Text style={styles.errorText}>{errors.amountError}</Text>}
            </View >
        </TouchableWithoutFeedback>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    errorText: {
        fontSize: 16,
        padding: 4,
        color: "red"
    },
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttons: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },
    inputContainer: {
        gap: 20,
        marginVertical: 16
    },
    inputField: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 24,
        color: GlobalStyles.colors.primary700
    },
    inputLabel: {
        fontSize: 16,
        color: GlobalStyles.colors.primary400
    }
})