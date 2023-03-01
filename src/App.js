import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {Customers} from "./components/Customers";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {Customer} from "./components/Customer";
import {Accounts} from "./components/Accounts";
import {CreateAccount} from "./components/CreateAccount";
import {useState} from "react";
import {Navbar} from "./components/Navbar";
import {Transactions} from "./components/Transactions";

function App() {
    const [customers, setCustomers] = useState([])
    const [customer, setCustomer] = useState()
    const [accounts, setAccounts] = useState()
    const [transactions, setTransactions] = useState()
    return (<div className="App">
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/customer"
                           element={
                               <Customers
                                   customers={customers}
                                   setCustomers={setCustomers}
                                   setAccounts={setAccounts}
                               >
                               </Customers>}/>
                    <Route path="/customer/:id"
                           element={
                               <Customer
                                   customer={customer}
                                   setCustomer={setCustomer}>
                               </Customer>}/>
                    <Route path="/account" element={
                        <CreateAccount
                            account={accounts}
                            setAccount={setAccounts}
                        ></CreateAccount>}/>
                    <Route path="/customer/:id/accounts" element={
                        <Accounts
                            accounts={accounts}
                            setTransactions={setTransactions}>
                        </Accounts>}/>
                    <Route path="/customer/:customerId/accounts/:accountId/transactions" element={
                        <Transactions
                            transactions={transactions}>
                        </Transactions>}/>
                    <Route path="/" element={
                        <Navbar></Navbar>}></Route>
                </Routes>
            </Container>
        </BrowserRouter>
    </div>)
}

export default App;
