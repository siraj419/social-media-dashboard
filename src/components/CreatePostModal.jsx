
const CreatePostModal = ({closeCreateModal}) => {
  return (
    <div
        className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center"
    >
        <div
            className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
            <form className="space-y-4">
                <div>
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Post Title"
                        required    
                    />
                </div>
                <div>
                    <label
                        htmlFor="body"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Body
                    </label>
                    <textarea    
                        id="body"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="Write your post here..."
                        rows="5"
                        required
                    ></textarea>
                </div>
         
                <div>
                    <label
                        htmlFor="tags"
                        className="block mb-2 text-sm font-medium text-gray-700"
                    >
                        Tags (comma separated)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                        placeholder="e.g. javascript, webdev, react"
                    />
                </div>
                <div className="flex gap-3">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Submit Post
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                            onClick={closeCreateModal}
                        >
                            Cancel
                        </button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default CreatePostModal