import {Container} from "react-bootstrap";
import {Navbar} from "./Navbar";
import Table from "react-bootstrap/Table";

export const Transactions = ({transactions}) => {
    return (
        <Container>
            <Navbar></Navbar>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Amount</th>
                    <th>Transaction Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions?.map(({id, amount, transactionDate, notes, ...transactions}, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{amount}</td>
                                <td>{transactionDate}</td>
                            </tr>)
                    })
                }
                </tbody>
            </Table>
        </Container>

    )
}