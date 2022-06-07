import "./styles/App.scss";

import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import ExpenseCategory from "./components/ExpenseCategory";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageContainer>
        <Navbar />
        <div className="mobileMenu">
          <MobileNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/addExpense"
            element={
              <Transaction
                title="Add Expense"
                formTitle="Add a New Expense"
                buttonTitle="add a new expense"
                category={<ExpenseCategory />}
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
              />
            }
          />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
