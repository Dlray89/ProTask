    //write the mutation using javascript constant using the gql parser function
// use the mutation component passing the graphQL mutation and variables as props
//use the mutation function that gets injected into the components

import React, { Component } from "react"
import { Mutation } from "react-apollo"
import { FEED_QUERY } from "./ProjectList"
import gql from "graphql-tag"

import AddBoxIcon from '@material-ui/icons/AddBox';import {TextField, Button, Typography} from "@material-ui/core"

const POST_MUTATION = gql `
mutation CreateProject($newProject: ProjectCreateInput!) {
  createProject(data: $newProject) {
    id
    projectName
    description
  }
}
`

class NewProject extends Component {
    state = {
        projectName: "",
        description: ''
    }

    resetForm = e => {
        this.setState({ projectName: "", description: ""})
    }

    render() {
        const { projectName, description} = this.state
        return(
            <div >
                <div onSubmit={e => {e.preventDefault(); this.resetForm() }}>
                        <TextField 
                            style={{width: "100%", margin:"3% 0"}}
                            value={projectName}
                            variant="outlined"
                            onChange={e => this.setState({ projectName: e.target.value})}
                            type="text"
                            placeholder="Name"
                        />
                        <br />
                        <TextField 
                        style={{width: "100%", margin:"3% 0"}}

                        variant="outlined"
                        multiline
                        rows={4}
                            value={description}
                            onChange={e => this.setState({ description: e.target.value})}
                            type="text"
                            placeholder="Project details"
                        />
                        <br />
                        <Mutation 
                         mutation={POST_MUTATION} 
                         variables={{ newProject: {projectName, description} }}
                        //  onCompleted={() => this.props.push()
                        refetchQueries={[
                            {
                                query: FEED_QUERY
                            }
                        ]}
                         >
                        {postMutation => <Button  onClick={postMutation}>Create</Button>}
                        </Mutation>
                       
                </div>
            </div>
        )
    }
}

export default NewProject