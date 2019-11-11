import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import "bulma/css/bulma.css";
import { Container, Table } from "bloomer";
export default class Issues extends Component {
    state = {
        issues: []
    };

    async componentDidMount() {
        const issues = await loadData(
            "https://api.github.com/repos/facebook/create-react-app/issues"
        );

        this.setState({ issues });
    }

    render() {
        const issues = this.state.issues;

        return (
            <Container style={{margin: '0px 200px'}}>
            <Table isNarrow isBordered isStriped>
                <tbody>
                    {issues.map(issue => (
                        <tr>
                            <td>{issue.title}</td>
                            <td>
                                <a href={issue.url}>{issue.url}</a>
                            </td>
                            <td>{issue.body}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
        );
    }
}
