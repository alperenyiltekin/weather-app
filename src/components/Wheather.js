import React from 'react';

// you can use for the min max values. Check  23. line
function minMaxTemp(min, max) {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg; / {max}&deg;</span>
            </h3>
        )
    }
}

function Wheather(props) {
    return (
        <div className="container text-light">
            <div className="cards pt-5">
                <h1 style={{ fontSize: '4em', marginTop: '10px' }}>{props.city}</h1>
                <h5 className="py-4">
                    <i style={{ fontSize: '8em', marginTop: '10px' }} className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.celsius ? (<h1 className="py-2" style={{ fontSize: '5em' }}>{props.celsius}&deg;</h1>) : null}
                {/*for the shows min and max temperature values run this func => minMaxTemp(props.temp_min, props.temp_max)*/}
                <h4 className="py-3" style={{
                    marginBottom: '0',
                    textTransform: 'capitalize',
                    fontSize: '3em'
                }}>
                    {props.description}
                </h4>
            </div>
        </div>
    )
}


export default Wheather;
