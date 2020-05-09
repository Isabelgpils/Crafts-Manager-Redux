import React from 'react';

const DmcItem = (props) => {
	// const [ select, setSelected ] = useState(false);

	// const borderSize = select ? '8px solid green' : undefined;

	const fontColor = props.dark ? 'white' : 'lightBlack';
	// this will change the fontcolor
	return (
		<div style={{ paddingRight: '1px', margin: '20px' }}>
			<div className="ui cards">
				<div className="card" style={{ height: '150px', width: '200px', backgroundColor: `rgb(${props.rgb})` }}>
					<div className="content">
						<h5 style={{ color: fontColor }}>{props.dmc}</h5>
						{/* Change the text color to light */}
						<h6 style={{ color: fontColor }}>{props.color}</h6>

						<br />
						{/* <button
							className="ui primary button"
							onClick={() => {
								console.log(`${props.number} was selected`);
								// setSelected(!select);
							}}
						>
							Need
						</button>

						<button className="ui button">Have</button> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DmcItem;
