import { useState, useEffect } from "react";

const EditPostModal = ({ closeEditModal, post, onSave }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setBody(post.body || "");
      setTags(post.tags ? post.tags.join(", ") : "");
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const updatedPost = {
      title,
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
    };

    onSave(post.id, updatedPost); 
    closeEditModal(); 
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-100 bg-opacity-90 flex items-center justify-center">
      <div className="w-full max-w-lg p-6 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 rounded-xl shadow-2x">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">Edit Post</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
         
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="e.g. javascript, react, webdev"
            />
          </div>

      
          <div className="flex gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={closeEditModal}
              className="px-4 py-2 bg-pink-300 text-white rounded-md hover:bg-pink-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPostModal;
