import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card.js";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date = {expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
