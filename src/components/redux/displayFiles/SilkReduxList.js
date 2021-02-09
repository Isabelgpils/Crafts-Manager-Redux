import React from 'react';
import { connect } from 'react-redux';
import { selectSilk } from './actions';


const SilkReduxList = ({ silks, selectSilk, state, renderList }) => {


    return silks.map((silk) => {
        const fontColor = silk.dark ? 'white' : 'lightBlack';
        const cardColor = silk.dmc === 'none' ? 'lightGrey' : `rgb(${silk.rgb})`
        return (

            <div className="item" key={`${silk.brand}${silk.number}`} style={{ color: fontColor, backgroundColor: cardColor }} >
                <div className="right floated content" >
                    <button

                        className="ui button white"
                        onClick={() => selectSilk(silk)}
                    >
                        Select
						</button>

                </div>
                <div className="content" style={{ padding: '1rem' }}>
                    <div>
                        <h5>{silk.brand} {silk.number}</h5>
                        <h6>DMC: {silk.dmc}</h6>
                    </div>
                </div>
                <div>{state}</div>
            </div>
        );

    });
}

const mapStateToProps = (state) => {
    console.log(state);
    return { silks: state.silks };
};
export default connect(mapStateToProps, { selectSilk: selectSilk })(SilkReduxList);
