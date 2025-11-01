import { MessageCircle, ThumbsUp, ThumbsDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post, onEditClick, onDelete, onLike, onDislike }) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer bg-gradient-to-br from-orange-100 via-pink-100 border border-pink-200 shadow-md rounded-xl p-5 w-80 hover:shadow-lg hover:scale-105 transition-all duration-300"
      onClick={() => navigate(`/post/${post.id}`)}
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>

      {/* Body Preview */}
      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.body}</p>

      {/* Tags */}
      <div className="flex items-center text-sm text-gray-600 flex-wrap gap-2 mb-2">
        {post.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-200 px-2 py-1 rounded-full text-gray-800"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Like / Dislike / Comments */}
      <div
        className="mt-3 flex items-center gap-6 text-sm text-gray-600"
        onClick={(e) => e.stopPropagation()} // Prevent navigate when clicking buttons
      >
        <button
          className="flex gap-2 items-center hover:text-blue-600 transition"
          onClick={() => onLike(post.id)}
        >
          <ThumbsUp size={18} />
          {post.likes}
        </button>

        <button
          className="flex gap-2 items-center hover:text-red-600 transition"
          onClick={() => onDislike(post.id)}
        >
          <ThumbsDown size={18} />
          {post.dislikes}
        </button>

        <span className="flex gap-2 items-center">
          <MessageCircle size={18} />
          {post.comments?.length || 0}
        </span>
      </div>

      {/* Edit / Delete Buttons */}
      <div
        className="mt-4 flex gap-4 text-sm"
        onClick={(e) => e.stopPropagation()} // Prevent navigation
      >
        <button
          onClick={() => onEditClick(post.id)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-md transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
