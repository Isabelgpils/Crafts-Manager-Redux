import React from 'react';
import { connect } from 'react-redux';
import { selectMetallic } from './actions';

const MetallicReduxList = ({ metallics, selectMetallic, state, renderList }) => {
    return metallics.map((metallic) => {
        return (

            <div className="item" key={`${metallic.type}${metallic.number}`}>
                <div className="right floated content">
                    <button
                        // style={{ color: 'navy' }}
                        className="ui button white"
                        onClick={() => selectMetallic(metallic)}
                    >
                        View Detail
						</button>
                </div>
                <div className="content" style={{ padding: '1rem' }}>
                    <div>
                        <h6>{metallic.type}{metallic.number}</h6>
                    </div>
                    <img
                        src={`https://www.123stitch.com/pictures/${metallic.type}${metallic.number}.jpg`}
                        alt="metallics"
                        style={{ height: '30%', width: '30%', margin: 'auto' }}
                    />
                </div>
                <div>{state}</div>
            </div>
        );

    });
}

const mapStateToProps = (state) => {
    console.log(state);
    return { metallics: state.metallics };
};
export default connect(mapStateToProps, { selectMetallic: selectMetallic })(MetallicReduxList);
