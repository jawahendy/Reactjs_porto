import axios from "axios";
import { useState, useEffect } from "react";

const Tableapi = () => {
    const [arcticle, setArcticle] = useState([]);
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const urlApi = "https://jsonplaceholder.typicode.com/posts";
    useEffect(() => {

        // using axios

        const getArticle = async () => {
            const { data: res } = await axios.get(urlApi);
            setArcticle(res);
        };
        getArticle();

        // using fetch react

        // const getArticle = async () => {
        //     const fetcharcticle = await fetch(urlApi);
        //     const jsonarticle = await fetcharcticle.json()
        //     setArcticle(jsonarticle);
        // };
        // getArticle();


    }, []);

    const addArticle = async () => {
        const post = { title: title, body: body };
        await axios.post(urlApi, post);
        setArcticle([post, ...arcticle]);
    };

    const handleUpdate = async (post) => {
        post.title = title;
        post.body = body;
        await axios.put(urlApi + "/" + post.id);
        const arcticleClone = [...arcticle];
        const index = arcticleClone.indexOf(post);
        arcticleClone[index] = { ...post };
        setArcticle(arcticleClone);
    };

    function selectArticle(id) {
        let item = arcticle[id - 1];
        setTitle(item.title)
        setBody(item.body)
    }

    const handleDelete = async (post) => {
        await axios.delete(urlApi + "/" + post.id + post);
        setArcticle(arcticle.filter((p) => p.id !== post.id));
    };

    if (arcticle.length === 0) return <h2> there are no post in the Database </h2>;
    return (
        <>
            <div className="container">
                <h2> there are {arcticle.length} post in the Database </h2>
                <form>
                    <label>Title</label>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <br />
                    <label>Body</label>
                    <input type='text' value={body} onChange={(e) => setBody(e.target.value)} />
                </form>
                <button onClick={addArticle} className="btn btn-primary btn-sm">
                    Add Post
                </button>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arcticle.map((post) => (
                            <tr key={post.id}>
                                <td> {post.title} </td>
                                <td> {post.body} </td>
                                <td>
                                    <button
                                        onClick={() => handleUpdate(post)}
                                        className="btn btn-info btn-sm"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => selectArticle(post.id)}
                                        className="btn btn-info btn-sm"
                                    >
                                        Select
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(post)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tableapi;