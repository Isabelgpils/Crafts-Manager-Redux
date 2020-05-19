import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const MetallicDetail = ({ metallics }) => {
    if (!metallics) {
        return (
            <div>
                <h5>View Detail</h5>
            </div>
        );
    }
    return (
        <Fragment>
            {metallics.map((metallic) => (
                <div key={`${metallic.type}-${metallic.number}`}>

                    <h5>{metallic.type}{metallic.number}</h5>
                    <h6>Pattern: {metallic.patterns}</h6>

                    <img
                        src={`https://www.123stitch.com/pictures/${metallic.type}${metallic.number}.jpg`}
                        alt="metallics"
                        style={{ height: '90%', width: '90%', margin: 'auto' }}
                    />
                </div>
            ))}
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        metallics: state && state.selectedReducer && state.selectedReducer.selectMetallic
        //if state is all of these things
    };
};
export default connect(mapStateToProps)(MetallicDetail);