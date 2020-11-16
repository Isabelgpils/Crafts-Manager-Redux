import React, { useState } from 'react';

const Search = () => {
    const [inputData, setInputData] = useState({ firstName: "", lastName: "" })
    const [contactsData, setContactsData] = useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(prevContacts => [...prevContacts, inputData])
    }

    const beads = contactsData.map(bead => <h2 key={bead.number}>{bead.number} {bead.pattern}</h2>)

    return (
        <>
            <form style={{ margin: "100px" }} onSubmit={handleSubmit}>
                <input
                    placeholder="Bead Number"
                    name="number"
                    value={inputData.number}
                    onChange={handleChange}
                />
                <input
                    placeholder="Bead Pattern"
                    name="pattern"
                    value={inputData.pattern}
                    onChange={handleChange}
                />
                <br />
                <button>Add Bead</button>
            </form>
            {beads}
        </>
    )
}

export default Search;