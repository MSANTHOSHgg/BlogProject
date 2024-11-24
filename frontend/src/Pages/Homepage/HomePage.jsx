import React, { useEffect, useState } from "react";
import axios from 'axios';
import PostCard from "../../components/Postcard/PostCard";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("http://localhost:3001/posts");
                setPosts(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/delete/${id}`);
            setPosts((prev) => prev.filter((post) => post._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="homepage">
                <h1>Blog Posts</h1>
                <div className="blogcontainer">
                    {posts.map((post) => (
                        <PostCard key={post._id} post={post} onDelete={handleDelete} className="post-card-container" />
                    ))}
                </div>
            </div>
            <div className="createblog">
                <button><Link to="/create">+</Link></button>
            </div>
        </>
    );
};

export default Homepage;