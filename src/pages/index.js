import React from "react";
import { Link } from "gatsby";

export default class Test extends React.Component {
    render() {
        return(
            <div>
                <Link to="/test">
                    Soy un test :DDDD
                </Link>
            </div>
        )
    }
}