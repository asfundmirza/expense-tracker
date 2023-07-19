import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterTitleValue, setEnteredTitleValue] = useState("");
  const [enterAmountValue, setEnteredAmountValue] = useState("");
  const [enterDateValue, setEnteredDateValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const currentDate = new Date().toISOString().split("T")[0];
  const addExpenseHandler = () => {
    setShowForm(true);
  };
  const cancelExpenseHandler = () => {
    setShowForm(false);
  };
  function titleEventHandler(event) {
    setEnteredTitleValue(event.target.value);
  }
  function AmountEventHandler(event) {
    setEnteredAmountValue(event.target.value);
  }
  function DateEventHandler(event) {
    setEnteredDateValue(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenses = {
      title: enterTitleValue,
      amount: +enterAmountValue,
      date: new Date(enterDateValue),
    };

    setEnteredTitleValue("");
    setEnteredAmountValue("");
    setEnteredDateValue("");
    setShowForm(false);
    props.onSave(expenses);
  }

  let showFormData = (
    <div className="new-expense__actions__button">
      <button type="submit" onClick={addExpenseHandler}>
        Add Expense
      </button>
    </div>
  );
  if (showForm) {
    showFormData = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control label">
            <label>Title</label>
            <input
              value={enterTitleValue}
              onChange={titleEventHandler}
              type="text"
              className="new-expense__control input"
            />
          </div>
          <div className="new-expense__control label">
            <label>Amount</label>
            <input
              value={enterAmountValue}
              onChange={AmountEventHandler}
              type="number"
              className="new-expense__control input"
              min="0.01"
              step="0.01"
            />
          </div>
          <div className="new-expense__control label">
            <label>Date</label>
            <input
              value={enterDateValue}
              onChange={DateEventHandler}
              type="date"
              className="new-expense__control input"
              min="2019-01-01"
              max={currentDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={cancelExpenseHandler}>
            Cancel
          </button>
          <button type="submit" onClick={addExpenseHandler}>
            Add Expense
          </button>
        </div>
      </form>
    );
  }

  return showFormData;
}
export default ExpenseForm;
