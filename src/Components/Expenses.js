import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./FormComponents/ExpensesFilter";

import ExpensesChart from "../Components/FormComponents/ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectYear = (filterValue) => {
    setFilteredYear(filterValue);
  };
  const filteredArray = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesChart expense={filteredArray} />
      <ExpensesFilter selected={filteredYear} onChangeFilter={selectYear} />
      {filteredArray.length === 0 ? (
        <p className="no_expenses">No Data Found</p>
      ) : (
        filteredArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}
export default Expenses;
