import "./styles/App.scss";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import ExpenseCategory from "./components/ExpenseCategory";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  var category = "Product";
  const [transactions, setTransactions] = useState([]);
  const [id, setId] = useState(0);

  const [productExpense, setProductExpense] = useState(0);
  const [billsExpense, setBillsExpense] = useState(0);
  const [entertainmentExpense, setEntertainmentExpense] = useState(0);
  const [otherExpense, setOtherExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const refreshMoney = (transaction) => {
    const cat = transaction.category;
    const money = parseFloat(transaction.money);
    switch (cat) {
      case "Product": {
        setProductExpense(productExpense + money);
        break;
      }
      case "Income": {
        setIncome(income + money);
        break;
      }
      case "Bills": {
        setBillsExpense(billsExpense + money);
        break;
      }
      case "Other": {
        setOtherExpense(otherExpense + money);
        break;
      }
      case "Entertainment": {
        setEntertainmentExpense(entertainmentExpense + money);
        break;
      }
    }
  };

  const setCategory = (category2) => {
    category = category2;
  };

  const addTransaction = (transaction) => {
    transaction.id = id + 1;
    setId(id + 1);
    setTransactions([...transactions, transaction]);
    refreshMoney(transaction);
  };

  const addExpense = (transaction, event) => {
    event.preventDefault();
    transaction.category = category;
    addTransaction(transaction);
  };

  const addIncome = (transaction, event) => {
    event.preventDefault();
    transaction.category = "Income";
    addTransaction(transaction);
  };

  return (
    <div className="App">
      <PageContainer>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                transactions={transactions}
                income={income}
                productExpense={productExpense}
                billsExpense={billsExpense}
                entertainmentExpense={entertainmentExpense}
                otherExpense={otherExpense}
              />
            }
          ></Route>

          <Route
            path="/addExpense"
            element={
              <Transaction
                title="Add Expense"
                formTitle="Add a New Expense"
                buttonTitle="add a new expense"
                category={<ExpenseCategory getCategory={setCategory} />}
                getTransaction={addExpense}
              />
            }
          />

          <Route
            path="/addIncome"
            element={
              <Transaction
                title="Add Income"
                formTitle="Add a New Income"
                buttonTitle="add a new income"
                getTransaction={addIncome}
              />
            }
          />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
