import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react";

const PostCard = ({ onClick, post, onEditClick, onDelete, onLike, onDislike }) => {
    console.log(post)
  return (
    <div
      className="cursor-pointer bg-gradient-to-br from-orange-100 via-pink-100  border-pink-300 shadow-md rounded-xl p-5 w-80 hover:shadow-lg hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{post.body}</p>

      <div className="flex items-center text-sm text-gray-600 flex-wrap gap-3">
        {post.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-10 text-sm text-gray-600">
        <button className="flex gap-3 items-center" onClick={()=>onLike(post.id)}>
          <ThumbsUp size={20} />
          {post.likes}
        </button>
        <button className="flex gap-3 items-center" onClick={()=>onDislike(post.id)}>
          <ThumbsDown size={20} />
          {post.dislikes}
        </button>
        <button className="flex gap-3 items-center">
          <MessageCircle size={20} />
          {post.comments.length}
        </button>
      </div>

      <div className="mt-3 flex gap-4 text-sm">
        <button
          onClick={() => onEditClick(post.id)}
           className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostCard;
