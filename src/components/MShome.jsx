import React, {Component} from "react";


export class MShome extends Component{


    state ={
        progress: "0"
    }



    render() {
            return(

                <div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width: this.state.progress + '%'}} aria-valuenow="0"
                         aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" onClick={()=> (this.setState({progress:"100"})) } >Button </a>

                    </p>
                </div>
            )

    }

}

export default MShome
