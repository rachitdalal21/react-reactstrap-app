import React from 'react';
import {Media} from "reactstrap";

function RenderLeader(props) {

    const leader = props.leader;

    return (
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} />
                </Media>
                {/*<Media body className="ml-5">*/}
                <div className="media-body ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>
                {/*</Media>*/}
                </div>
            </Media>
        </div>
    );
}

export default RenderLeader;