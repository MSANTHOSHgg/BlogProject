import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './PostCard.css'

const PostCard = ({ post, onDelete }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/${post._id}`);
    };
    return (
        <div className="post-card" onClick={handleClick}>
            <h2>{post.title}</h2>
            <p>{post.summary || "No summary available"}</p>
            <p>
                <small>{new Date(post.publishedDate).toLocaleDateString()}</small>
            </p>
            {/* <div>
                <Link to={`/edit/${post._id}`}>Edit</Link>
                <div>
                    <button
                        onClick={() => onDelete(post._id)}>Delete</button>
                </div>
            </div> */}
        </div>
    );
};

export default PostCard;