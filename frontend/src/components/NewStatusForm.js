import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewStatusForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        slug: ""
    };

    componentDidMount() {
        if (this.props.status) {
            const { pk, name, slug } = this.props.status;
            this.setState({ pk, name, slug });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    createStatus = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        }); 
    }

    editStatus = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    }

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    render() {
        return (
            <Form onSubmit={this.props.status ? this.editStatus : this.createStatus}>
                <FormGroup>
                    <Label for="name">Name: </Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="slug">Slug: </Label>
                    <Input
                        type="text"
                        name="slug"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.slug)}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        )
    }
}

export default NewStatusForm;