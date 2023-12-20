import React from "react"
import { useGetCabinsQuery } from "../../api/apiSlice"

const Cabins = () => {

    const [newCabin, setNewCabin] = React.useState()
    const {data} = useGetCabinsQuery()

    console.log(data)

    const handleSubmit = e => {
        e.preventDefault()
        // For now
        console.log(newCabin)
        setNewCabin("")
    }
    return (
        <>
            <h1>Cabins List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New Cabin"
                    value={newCabin}
                    onChange={e => setNewCabin(e.target.value)}
                />
                <button type="submit">Add Cabin</button>
            </form>
        </>
    )
}

export default Cabins