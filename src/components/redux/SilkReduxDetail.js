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

                <div key={`${silk.brand}-${silk.number}`} style={{ padding: "10px", textAlign: "center", height: "100px", width: "200px", color: silk.dark ? 'white' : 'lightBlack', backgroundColor: silk.dmc === 'none' ? 'lightGrey' : `rgb(${silk.rgb})` }}>

                    <h5>{silk.brand}{silk.number}</h5>
                    <h6>DMC: {silk.dmc}</h6>
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