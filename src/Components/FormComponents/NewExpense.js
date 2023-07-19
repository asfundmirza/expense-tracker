import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const addNewExpense = (expenseData) => {
    const expenses = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.addNewExpenseData(expenses);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSave={addNewExpense} />
    </div>
  );
}
export default NewExpense;
