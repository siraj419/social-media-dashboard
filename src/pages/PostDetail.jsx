import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const selectedPost = savedPosts.find((p) => p.id === id || p.id === parseInt(id));
    setPost(selectedPost);

    const savedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      text: newComment,
      time: new Date().toLocaleString(),
    };

    const updatedComments = [...comments, commentObj];
    setComments(updatedComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  if (!post)
    return (
      <h2 className="text-center text-xl mt-20 text-gray-700">
        Post not found 😕
      </h2>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 text-gray-900 p-6">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        &larr; Back
      </button>

      {/* 📝 Post Details */}
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.body}</p>

        {/* 🏷️ Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* 👍👎 Likes & Dislikes */}
        <div className="flex gap-4 mb-6">
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
            👍 {post.likes}
          </span>
          <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">
            👎 {post.dislikes}
          </span>
        </div>

        {/* 💬 Comments Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Comments</h2>

          {comments.length === 0 ? (
            <p className="text-gray-500 mb-4">No comments yet 😄</p>
          ) : (
            <ul className="mb-4 space-y-2">
              {comments.map((c, index) => (
                <li key={index} className="bg-gray-100 p-3 rounded">
                  <p>{c.text}</p>
                  <span className="text-xs text-gray-400 text-right block">
                    {c.time}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* ➕ Add Comment */}
          <form onSubmit={handleAddComment} className="flex flex-col gap-2">
            <textarea
              className="border border-gray-300 p-2 rounded w-full"
              rows={3}
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              type="submit"
              className="self-end px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
