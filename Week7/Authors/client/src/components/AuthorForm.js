import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './AuthorForm.css';

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:8000/api/author", { name })
    .then((response) => {
        console.log(response);
        navigate("/");
    })
    .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
    });
    };
    return (
        <div className="container">
        <div className="row">
                <div className="col-4">
                <Link to="/">Home</Link>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="purple">
                            <p>Add a new author:</p>
                        </div>
                        <div className="form-div">
                        <div>
                            <label htmlFor="name">Name: </label>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>
                        <div>
                            <Link to={`/`}>
                            <button className="btn btn-primary">Cancel</button>
                            </Link>
                            <button className="btn btn-primary" type="submit">
                            Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default AuthorForm;