import { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        axios.get('http://localhost:3001/api/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);
    
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
    );
}

export default Posts