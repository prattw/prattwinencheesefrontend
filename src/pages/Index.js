import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [newForm, setNewForm] = useState({
    name: "",
    image: "",
    maker: "",
  });
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCheeses(newForm);
    setNewForm({
      name: "",
      image: "",
      maker: "",
    });
  };
  const loaded = () => {
    return props.cheeses.map((cheese) => (
      <div key={cheese._id} className="cheese">
        <Link to={`/cheeses/${cheese._id}`}>
          <h1>{cheese.name}</h1>
        </Link>
        <img src={cheese.image} alt={cheese.name} />
        <h3>{cheese.maker}</h3>
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return <section>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
        />
        <input
            type="text"
            value={newForm.maker}
            name="maker"
            placeholder="maker"
            onChange={handleChange}
        />
        <input type="submit" value="Create Item"/>
      </form>
      {props.cheeses ? loaded() : loading()}
  </section>
}
export default Index;