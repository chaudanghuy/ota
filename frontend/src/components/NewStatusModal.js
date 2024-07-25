import React, {Component, Fragment} from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStatusForm from "./NewStatusForm";

class NewStatusModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    };

    render() {
        const create = this.props.create;

        var title = "Editing Status";
        var button = <Button onClick={this.toggle}>Edit</Button>;
        if (create) {
            title = "Creating Status";
        }

        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={this.toggle}
                style={{minWidth: "200px"}}
            >
                Create New
            </Button>
        )

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    
                    <ModalBody>
                        <NewStatusForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            status={this.props.status}
                        />                        
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default NewStatusModal;