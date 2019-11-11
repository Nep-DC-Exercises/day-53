import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import { Container, Box } from "bloomer";

export class IndividualIssue extends Component {
    state = {
        issue: "Loading Data"
    };

    async componentDidMount() {
        const id = this.props.match.params.issue_id;
        this.getUniqueIssue(id);
    }

    getUniqueIssue = async id => {
        const issue = await loadData(
            `https://api.github.com/repos/facebook/create-react-app/issues/${id}`
        );

        this.setState({ issue });
    };

    render() {
        const issue = this.state.issue;

        if (this.state.issue === "Loading Data") {
            return <h1>Loading Data</h1>;
        } else {
            return (
                <Container style={{maxWidth: "750px"}}>
                    <Box>
                        <header>
                            <h1 className="title">
                                {issue.title} #{issue.number}
                            </h1>
                            <p>{issue.user.login} opened this issue.</p>
                        </header>
                    </Box>

                    <Box>
                        <div className="content">
                            <p>{issue.body}</p>
                        </div>
                    </Box>
                </Container>
            );
        }
    }
}

export default IndividualIssue;
