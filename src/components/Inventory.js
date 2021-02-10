import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import basket from '../icons/basket48.png';
import circleX from '../icons/circleX.png';
import checkmark from '../icons/checkmark48.png';

const Inventory = () => {

    const [inventory, setInventory] = useState('');

    return (
        <div>

            <Button size="medium" onClick={() => setInventory(<img src={checkmark} />)} style={{ marginLeft: "25px" }} >
                Have
				</Button>
            <Button size="medium" onClick={() => setInventory(<img src={basket} />)} style={{ marginLeft: "85px" }} >
                Need
            </Button>
            <Typography style={{ textAlign: "center" }} variant="h6" component="h6">
                {inventory}
            </Typography >
        </div>
    )
}
export default Inventory;
