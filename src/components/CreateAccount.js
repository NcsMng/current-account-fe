import React, {useEffect, useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Navbar} from "./Navbar";
import {Container} from "react-bootstrap";


export const CreateAccount = (accounts, setAccounts) => {
    const createAccountURL = 'http://localhost:8080/v1/account'
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    const [requestData, setRequestData] = useState({
        customerId: "",
        initialCredit: ""
    })

    function handle(e) {
        const newData = {...requestData}
        newData[e.target.id] = e.target.value
        setRequestData(newData)
    }

    useEffect(() => console.log(requestData), [requestData]);

    function submit(e) {
        e.preventDefault()
        axios.post(createAccountURL,
            {
                "customerId": requestData.customerId,
                "initialCredit": requestData.initialCredit
            }, config)
            .then(createdAccount => {
                setAccounts(accounts.push(createdAccount))
                console.log("CREATED ACCOUNT:")
                console.log(createdAccount)
            })
    }

    return (
        <Container>
            <Navbar></Navbar>
            <div>
                <Form onSubmit={(e) => submit(e)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Customer Id</Form.Label>
                        <Form.Control id="customerId" type="text" placeholder="eg: 1" onChange={(e) => handle(e)} value={requestData.customerId}></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Initial Credit</Form.Label>
                        <Form.Control id="initialCredit" type="text" value={requestData.initialCredit} placeholder="eg: 1000" onChange={(e) => handle(e)}></Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>


    )
}