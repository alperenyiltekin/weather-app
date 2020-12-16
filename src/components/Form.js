import React from 'react';
import './Form.css';

function Form(props) {
    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            autoComplete="off"
                            placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input type="text"
                            className="form-control"
                            name="country"
                            autoComplete="off"
                            placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 mt2 text-md-left">
                        <button>Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
function error() {
    return (
        <div className="alert alert-danger" role="alert">
            Please enter City and Country
        </div>
    )
}
export default Form;
