import React, { Component} from "react"
import { Query} from "react-apollo"
import gql from "graphql-tag"
import Project from "./Project"

export const FEED_QUERY = gql `
{
    feed {
       id
       projectName
       description
    }
}
`
console.log(FEED_QUERY)


export default class ProjectList extends Component {
    render(){
    

        return(
            <Query query={FEED_QUERY}>
                {({ loading, error, data}) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const projectData = data.feed

                    return (
                        <div>
                            {projectData.map(project => <Project key={project.id} project={project}   />)}
                        </div>
                    )

                }}
            </Query>
        )
    }
}

