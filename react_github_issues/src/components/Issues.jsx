import React, { Component } from "react";
import { loadData } from "../utils/loadData";

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
            <>
                <ul>
                    {issues.map(issue => (
                        <>
                            <li>
                                {issue.title}
                                <p>{issue.url}</p>
                                <p>{issue.body}</p>
                            </li>
                        </>
                    ))}
                </ul>
            </>
        );
    }
}
