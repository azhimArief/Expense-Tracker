import "./ExpenseDate.css";
import React from 'react';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div class="expense-date">
      <div class="expense-date__month">{month}</div>
      <div class="expense-date__year">{year}</div>
      <div class="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
