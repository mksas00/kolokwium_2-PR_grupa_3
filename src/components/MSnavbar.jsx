import {Link} from "react-router-dom";
import {Component} from "react";


class MSnavbar extends Component{


    render() {

        return (
        <div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>

                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                              aria-controls="pills-home" aria-selected="true">Posts</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link to="/home" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                              aria-controls="pills-home" aria-selected="true">Home</Link>
                    </li>
                </ul>

            </div>

        </div>
        )

    }



}
export default MSnavbar;