import Table from "react-bootstrap/Table";
import {Navbar} from "./Navbar";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export const Accounts = ({accounts, setTransactions}) => {

    let navigate = useNavigate();

    const routeChange = (id) => {
        let path = id + "/transactions";
        console.log(path)
        navigate(path);
    }

    return (
        <Container>
            <Navbar></Navbar>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Balance</th>
                    <th>CreationDate</th>
                </tr>
                </thead>
                <tbody>
                {
                    accounts?.map(({id, balance, creationDate, customer, transactions, ...account}, index) => {
                        return (
                            <tr key={index} onClick={() => {
                                setTransactions(transactions?.sort((a, b) => {
                                    return a.id < b.id ? 1 : -1
                                }))
                                routeChange(id)
                            }}>
                                <td>{id}</td>
                                <td>{balance}</td>
                                <td>{creationDate}</td>
                            </tr>)
                    })
                }
                </tbody>
            </Table>
        </Container>

    )
}