import React, {useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {useNavigate} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Navbar} from "./Navbar";

export const Customers = ({customers, setCustomers, setAccounts}) => {

    useEffect(() => {
        const customersApiUrl = 'http://localhost:8080/v1/customer'

        axios
            .get(customersApiUrl)
            .then(response => {
                setCustomers(response.data.sort((a, b) => {
                    return a.id < b.id ? 1 : -1
                }))
            });
    }, [])

    let navigate = useNavigate();

    const routeChange = (id) => {
        let path = id + "/accounts";
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
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
                </thead>
                <tbody>
                {customers.map(({id, name, surname, accounts, ...customer}, index) => {
                    return (
                        <tr key={index} onClick={() => {
                            setAccounts(accounts?.sort((a, b) => {
                                console.log("a>>>", a)
                                console.log("b>>>", b)
                                return a.id < b.id ? 1 : -1
                            }))
                            routeChange(id)
                        }}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{surname}</td>
                        </tr>)
                })}
                </tbody>
            </Table>
        </Container>)
}