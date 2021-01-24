import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Inventory = () => {


    const [inventory, setInventory] = useState('');
    return (
        <div>
            <Typography style={{ textAlign: "center", color: "white", background: "darkGrey" }} variant="h6" component="h6">
                {inventory}
            </Typography >
            <Button size="medium" onClick={() => setInventory('In Stash')} style={{ marginLeft: "25px" }} >
                In Stash
				</Button>
            <Button size="medium" onClick={() => setInventory("Need")} style={{ marginLeft: "85px" }} >
                Need
				</Button>
        </div>
    )
}
export default Inventory;
