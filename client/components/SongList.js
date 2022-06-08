import React from "react";
import gql from 'graphql-tag';
// IMPORT FROM GRAPHQL-TAG BECAUSE QUERIES ARE NOT VALID JS(X) CODE
import { graphql } from '@apollo/client/react/hoc';
// this is the helper library that bonds apollo library and graphQL


class SongList extends React.Component {

    renderSongs() {

        return this.props.data.songs.map(song => {
            return ( 
                <li key={ song.id } className="collection-item">
                    { song.title }
                </li>
            )
        })
    };

    render() {

        if(this.props.data.loading) { return <div>Loading...</div> };

       return (
        <ul className="collection">
            { this.renderSongs() }
        </ul>
       )
    };
}

// this ONLY forms the query, it does NOT execute
const query = gql`
    {
        songs {
            id
            title
        }
    }
`;

export default graphql(query)(SongList);
// graphql(query) returns a function that is immediately invoked by (SongList)
// this is the bond that actually executes the query