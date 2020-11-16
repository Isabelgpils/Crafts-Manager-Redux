import React from 'react'
import portager2 from './patterns/images/portager2.jpg';
import { Grid } from '@material-ui/core';
import MetallicItem from './metallics/MetallicItem';
import SilkItem from './threads/SilkItem';
import BeadItem from './beads/BeadItem';

const Project = () => {

    //metallics
    const metallics = [
        { type: 'PB', number: '05', patterns: 'French Kitchen Garden', color: 'Black' },
        { type: 'PB', number: '25', patterns: 'French Kitchen Garden', color: 'Old Gld' },
        { type: 'SP', number: '051', patterns: 'French Kitchen Garden' },
        { type: 'SP', number: '068', patterns: 'French Kitchen Garden' },
    ];
    //French Kitchen Garden Beads
    const beads = [
        { number: '0057', patterns: 'French Kitchen Garden' },
        { number: '0060', patterns: 'French Kitchen Garden' },
        { number: '0501', patterns: 'French Kitchen Garden' },
        { number: '0747', patterns: 'French Kitchen Garden' },
        { number: '0779', patterns: 'French Kitchen Garden' },
        { number: '0832', patterns: 'French Kitchen Garden' },
        { number: '0922', patterns: 'French Kitchen Garden' },
        { number: '1790', patterns: 'French Kitchen Garden' },
        { number: '1812', patterns: 'French Kitchen Garden' },
        { number: '1816', patterns: 'French Kitchen Garden' },
    ];

    //  French Kitchen Garden Silks
    const silks = [
        { number: 210, brand: 'Gloriana', color: 'Silver Green', dmc: 3808, rgb: [2, 50, 68], dark: true },
        { number: 193, brand: 'Gloriana', color: 'Copper', dmc: 3808, rgb: [2, 50, 68], dark: true },
        { number: 17, brand: 'Gloriana', color: 'Deep Blue Sea', dmc: 3808, rgb: [2, 50, 68], dark: true },
        { number: 49, brand: 'Gloriana', color: 'Wood Pond', dmc: 928, rgb: [183, 192, 184] },
        { number: 48, brand: 'Gloriana', color: 'Spanish Moss', dmc: 732, rgb: [148, 140, 54], dark: false },
        { number: 206, brand: 'Gloriana', color: 'Olivine', dmc: 936, rgb: [76, 72, 39], dark: true },
        { number: 208, brand: 'Gloriana', color: 'Chocolat', dmc: 898, rgb: [73, 42, 19], dark: true },
        { number: 93, brand: 'Gloriana', color: 'Midnight', dmc: 'none', dark: false },
        { number: 113, brand: 'Gloriana', color: 'Autumn Arbor', dmc: 'none', dark: false },
        { number: 131, brand: 'Gloriana', color: 'Sable', dmc: 'none', dark: false },
        { number: 195, brand: 'Gloriana', color: 'Delicate Teal', dmc: 3811, dark: false },
        { number: 213, brand: 'Gloriana', color: 'Thistle Patch', dmc: 'none', dark: false },
        //Dinky Dyes
        { number: 104, brand: 'Dinky Dyes', color: 'True Blue', dmc: 312, dark: false },
        { number: 106, brand: 'Dinky Dyes', color: 'Billabong', dmc: 825, rgb: [101, 136, 193], dark: false },
        { number: 144, brand: 'Dinky Dyes', color: 'Matilda', dmc: 3820, rgb: [48, 68, 56], dark: true },
        { number: 162, brand: 'Dinky Dyes', color: 'Pindi', dmc: 3346, rgb: [64, 106, 58], dark: true },
        { number: 194, brand: 'Dinky Dyes', color: 'Jungle Green', dmc: 500, rgb: [48, 68, 56], dark: true },
        { number: 199, brand: 'Dinky Dyes', color: 'Matilda', dmc: 3778, rgb: [48, 68, 56], dark: true },
        { number: 201, brand: 'Dinky Dyes', color: 'Matilda', dmc: 500, rgb: [48, 68, 56], dark: true },
        //Caron Waterlilies
        { number: 66, brand: 'Caron Waterlilies', color: 'Jade', dmc: 988, rgb: [115, 139, 91], dark: false },
        { number: 183, brand: 'Caron Waterlilies', color: 'Santa Fe', dmc: 722, rgb: [0, 0, 0], dark: true },
        { number: 139, brand: 'Caron WaterFlowers', color: 'Kelp', dmc: 'none', dark: false },
        { number: 165, brand: 'Caron Waterflowers', color: 'Granite', dmc: 415, rgb: [199, 192, 119], dark: false }
    ];


    const projectSilks = silks.map((silk) => {
        return (
            <SilkItem
                key={`${silk.brand} ${silk.number}`}
                brand={silk.brand}
                number={silk.number}
                color={silk.color}
                rgb={silk.rgb}
                dmc={silk.dmc}
                dark={silk.dark}
            />
        );
    });

    const projectMetallics = metallics.map((metallic) => {
        return (
            <MetallicItem
                key={`${metallic.type}-${metallic.number} ${metallic.patterns}`}
                number={metallic.number}
                patterns={metallic.patterns}
                type={metallic.type}

            />
        );
    });

    const projectBeads = beads.map((bead) => {
        return (
            <BeadItem
                key={`${bead.number}${bead.patterns}`}
                number={bead.number}
                patterns={bead.patterns}

            />
        );
    });

    return (
        <Grid container direction="column" style={{ marginTop: "25px", padding: "25px" }}>
            {/* Pattern Title */}
            <Grid item xs={12}>
                <Grid item container>
                    <h5>French Kitchen Garden</h5>
                </Grid>
            </Grid>
            {/* Pattern Image */}
            <Grid item xs={12}>
                <Grid item container>
                    <img src={portager2} alt='pattern' height="38%" width="38%" align="center" />
                </Grid>
            </Grid>
            {/* Silk Title */}
            <Grid item xs={12}>
                <Grid item container>
                    <h5>Silk Threads</h5>
                </Grid>
            </Grid>
            {/* Silks */}
            <Grid item xs={12}>
                <Grid item container>
                    {projectSilks}
                </Grid>
            </Grid>
            {/* Metallic Title */}
            <Grid item xs={12}>
                <Grid item container>
                    <h5>Metallic Threads</h5>
                </Grid>
            </Grid>
            {/* Metallics */}
            <Grid item xs={12}>
                <Grid item container>
                    {projectMetallics}
                </Grid>
            </Grid>
            {/* Beads */}
            <Grid item xs={12}>
                <Grid item container>
                    <h5>Delica Beads</h5>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid item container>
                    {projectBeads}
                </Grid>
            </Grid>
        </Grid>

    )
};
export default Project;