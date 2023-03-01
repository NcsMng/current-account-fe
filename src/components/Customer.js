import React, {useEffect} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {useParams} from "react-router-dom";

export const Customer = ({customer, setCustomer}) => {


    const customerApiUrl = 'http://localhost:8080/v1/customer/'
    const customerId = useParams().id


    useEffect(() => {
        axios
            .get(customerApiUrl.concat(customerId))
            .then(response => {
                setCustomer(null)
                setCustomer(response.data)
            });
    }, [])


    return (
        <Table striped bordered>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Surname</th>
            </tr>
            </thead>
            <tbody>
            <tr key={customer?.id}>
                <td>{customer?.id}</td>
                <td>{customer?.name}</td>
                <td>{customer?.surname}</td>
            </tr>
            </tbody>
        </Table>)
}