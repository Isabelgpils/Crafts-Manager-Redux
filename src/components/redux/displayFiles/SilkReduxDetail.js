import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const SilkReduxDetail = ({ silks }) => {
    if (!silks) {
        return (
            <div>
                <h5>DMC</h5>
            </div>
        );
    }
    return (
        <Fragment>
            {silks.map((silk) => (

                <div key={`${silk.brand}-${silk.number}`} style={{ padding: "10px", textAlign: "center", height: "300px", width: "400px", color: silk.dark ? 'white' : 'lightBlack', backgroundColor: silk.dmc === 'none' ? 'lightGrey' : `rgb(${silk.rgb})` }}>

                    <h5>{silk.brand}{silk.number}</h5>
                    <h6>DMC: {silk.dmc}</h6>
                    <img

                        src={silk.image}
                        alt="silk threads"
                        style={{ margin: 'auto' }}
                        height="200px"
                        width="300px"
                    />
                </div>
            ))}
        </Fragment>
    );
};


const mapStateToProps = (state) => {
    console.log(state);
    return {
        silks: state && state.selectedReducer && state.selectedReducer.selectSilk
        //if state is all of these things
    };
};
export default connect(mapStateToProps)(SilkReduxDetail);