import {useEffect, useState} from "react"

function Show(props){
    //grab the id from the url
    const id = props.match.params.id
    // put the cheese array in its variable
    const cheeses = props.cheeses
    // find the individual cheese in cheesee
    const cheese = cheeses.find((c) => {
        return c._id === id
    })

    const [editForm, setEditForm] = useState(cheese)

    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateCheeses(editForm, cheese._id)
        props.history.push("/")
    }

    const removeCheese = () => {
        props.deleteCheeses(cheese._id)
        props.history.push("/")
    }

    return <div className="cheese">
        <h1>{cheese.name}</h1>
        <h2>{cheese.maker}</h2>
        <img src={cheese.image} alt={cheese.name} />
        <button id="delete" onClick={removeCheese}>Delete</button>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editForm.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editForm.maker}
                name="maker"
                placeholder="maker"
                onChange={handleChange}
            />
            <input type="submit" value="Update Item"/>
        </form>
    </div>
}
export default Show