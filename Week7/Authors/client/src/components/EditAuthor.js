import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import './AuthorForm.css';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState("");
    const [errors, setErrors] = useState({});
    const [authorNotFoundError, setAuthorNotFoundError] = useState("");
    console.log(id);
    useEffect(() => {
    axios
        .get(`http://localhost:8000/api/author/${id}`)
        .then((response) => {
        console.log(response.data);
        setAuthorName(response.data.name);
        })
        .catch((err) => {
        console.log(err.response);
        setAuthorNotFoundError(`Author not found using that ID`);
        });
    }, [id]);

    const submitHandler = (e) => {
    e.preventDefault();

    axios
        .put(`http://localhost:8000/api/author/${id}`, { name: authorName })
        .then((response) => {
        console.log(response);
        })
        .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
        });
    };
    return (
    <form onSubmit={submitHandler}>
        {authorNotFoundError ? (
        <h2>
            {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
        ) : 
        <div>
            <Link to="/">Home</Link>
            <div className="form-group">
                <div className="purple">
                    <p>Edit this author</p>
                    
                </div>
                <div className="form-div">
                    <div>
                        <label htmlFor="name">Name: </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="name"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                        />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                    </div>
                    <div>
                        <Link to={`/`}>
                            <button className="btn btn-primary">Cancel</button>
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </form>
    );
};

export default EditAuthor;