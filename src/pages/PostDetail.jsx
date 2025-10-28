import React, { useState } from "react";
import { useNavigate } from "react-router";

const post = 
    {
    id: "p8",
    title: "Working with PostgreSQL in Python",
    body: "PostgreSQL is a powerful open-source relational database. You can connect it to Python using psycopg2 or SQLAlchemy.",
    userId: 8,
    tags: ["postgresql", "database", "python"],
    likes: 101,
    dislikes: 3,
    comments: [
      { userId: 3, comment: "Love using SQLAlchemy.", likes: 5 },
      { userId: 6, comment: "Clear explanation.", likes: 2 }
    ]
  };


const PostDetail = () => {
  const navigate = useNavigate();
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const commentObj = {
      userId: 1, // You can replace with actual logged-in user ID
      comment: newComment,
      likes: 0,
    };
    setComments([...comments, commentObj]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 text-gray-900 p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        &larr; Back
      </button>

      {/* Post Content */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="mb-4">{post.body}</p>

        {/* Tags */}
        <div className="mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-pink-200 text-pink-800 px-3 py-1 mr-2 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Likes/Dislikes */}
        <div className="flex gap-4 mb-6">
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
            👍 {post.likes}
          </span>
          <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full">
            👎 {post.dislikes}
          </span>
        </div>

        {/* Comments Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Comments</h2>
          <ul className="mb-4 space-y-2">
            {comments.map((c, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded">
                <p>{c.comment}</p>
                <span className="text-sm text-gray-500">Likes: {c.likes}</span>
              </li>
            ))}
          </ul>

          {/* Add Comment Form */}
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
