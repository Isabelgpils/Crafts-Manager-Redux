import React, { useReducer } from 'react'
import ProjectsContext from './ProjectsContext';
import ProjectsReducer from './ProjectsReducer';
import {
    SEARCH_PATTERNS,
    SEARCH_BEADS,
    SEARCH_SILKS,
    SEARCH_DMC,
    SEARCH_METALLICS,
    CLEAR_SEARCH,
} from '..types';

const ProjectsState = (props) => {
    const initialState = {
        patterns: [],
        beads: [],
        silks: [],
        dmc: [],
        metallics: [],
        searchfield: ''
    }
    const [state, dispatch] = useReducer(ProjectsReducer)

    //Search Patterns


    // SEARCH_PATTERNS,


    //Search Beads
    // SEARCH_BEADS,

    //Search Silks

    // SEARCH_SILKS,

    //Search dmc thread

    //SEARCH_DMC,
    const filteredThreads = dmcThreads.filter((thread) => {
        const lowerCaseSearch = (this.state.searchfield || '').toLowerCase();
        const hasColorName = (thread.color || '').toLowerCase().includes(lowerCaseSearch);
        const hasDMCNumber = (thread.dmc || '').toString().includes(lowerCaseSearch);
        return hasColorName || hasDMCNumber;
    });
    set
    //Search metallic thread

    //SEARCH_METALLICS,

    //clear search

    //CLEAR_SEARCH,

    return <ProjectsContext.Provider value={{
        patterns: state.patterns,
        beads: state.beads,
        dmc: state.dmc,
        silks: state.silks,
        metallics: state.metallics,
        search: state.search

    }}
    >
        {props.children}
    </ProjectsContext.Provider>

    )




}
export default ProjectsState;