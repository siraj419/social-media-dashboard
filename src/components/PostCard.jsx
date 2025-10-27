import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react"


const PostCard = ({post}) => {
    return (
        <div
            className="w-[300px] p-4 border border-gray-300 rounded-lg shadow-md
                cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out
            "
        >
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 mb-4">{post.body}</p>
            <div className="flex items-center text-sm text-gray-600 flex-wrap gap-3">
                {
                    post.tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="bg-gray-200 px-2 py-1 rounded-full"
                        >
                            #{tag}
                        </span>
                    ))
                }
            </div>
            <div className="mt-4 flex items-center gap-10 text-sm text-gray-600">
                <span className="flex gap-3 items-center">
                    <ThumbsUp size={20} />
                    {post.likes}
                </span>
                <span className="flex gap-3 items-center">
                    <ThumbsDown size={20} />
                    {post.dislikes}
                </span>
                <span className="flex gap-3 items-center">
                    <MessageCircle size={20} />
                    {post.comments.length}
                </span>
            </div>
        </div>
    )
}

export default PostCard