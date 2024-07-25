import React, { Component } from "react";
import { Table } from "reactstrap";
import NewStatusModal from "./NewStatusModal";

class StatusList extends Component {
    render() {
        const statuses = this.props.statuses;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Slug</th>
                    </tr>
                </thead>
                <tbody>
                    {!statuses || statuses.length <= 0 ? (
                        <tr>
                            <td colSpan="2" align="center">
                                <b>Ops, no status yet</b>
                            </td>
                        </tr>
                    ) : (
                        statuses.map(status => (
                            <tr key={status.pk}>
                                <td>{status.name}</td>
                                <td>{status.slug}</td>
                                <td align="center">
                                    <NewStatusModal
                                        create={false}
                                        status={status}
                                        resetState={this.props.resetState}
                                        className="mr-2"
                                    />                                                                        
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        );
    }
}

export default StatusList;