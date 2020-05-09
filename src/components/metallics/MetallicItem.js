import React, { useState } from 'react';

const MetallicItem = (props) => {
	const [select, setSelected] = useState(false);

	const borderSize = select ? '8px solid green' : undefined;
	return (
		<div>
			<div style={{ marginTop: '20px', marginLeft: '10px' }} className="ui cards">
				<div className="card" style={{ backgroundColor: 'whitesmoke' }}>
					<div className="content" style={{ border: borderSize }}>
						<h5>
							{props.type} {props.number}
						</h5>
						<img
							src={`https://www.123stitch.com/pictures/${props.type}${props.number}.jpg`}
							alt="metallics"
							style={{ height: '15rem', width: '15rem', margin: 'auto' }}
						/>
						<h6>Pattern: {props.patterns}</h6>
						{/* <button
							className="ui lightgrey button"
							onClick={() => {
								console.log(`${props.number} was selected`);
								setSelected(!select);
							}}
						>
							Have
						</button>
						<button className="ui lightgrey button">Need</button> */}


					</div>
				</div>
			</div>
		</div>
	);
};
export default MetallicItem;
