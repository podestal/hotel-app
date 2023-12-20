import React from "react"
import { useGetCabinsQuery, useAddCabinMutation } from "../../api/apiSlice"

const Cabins = () => {

    const [newCabin, setNewCabin] = React.useState("")
    const {data: cabins, isLoading, isSuccess, isError, error} = useGetCabinsQuery()
    const [addCabin] = useAddCabinMutation()

    let content
    if (isLoading) {
        content = <p>Loading ...</p>
    } else if (isSuccess) {
        content = JSON.stringify(cabins)
    } else if (isError) {
        content = <p>{error}</p>
    }



    const handleSubmit = e => {
        e.preventDefault()
        addCabin({name: newCabin})
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
            {content}
        </>
    )
}

export default Cabins