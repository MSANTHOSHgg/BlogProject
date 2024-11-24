import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostPage.css";

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
      <div className="post-page">
      <h1>{post.title}</h1>
      <h4>Summary: {post.summary}</h4>
      <p>{post.content}</p>
      <p><small>{new Date(post.publishedDate).toLocaleDateString()}</small></p>
      <div className="btns">
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    );
};

export default PostPage;