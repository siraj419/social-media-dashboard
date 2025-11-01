import React, { useState } from "react";

const CreatePostModal = ({ closeCreateModal, addPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new post object
    const newPost = {
      id: Date.now(),
      title,
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    // Save to localStorage
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
    existingPosts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // Update parent & close modal
    addPost(newPost);
    closeCreateModal();
  };

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Create New Post
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Title */}
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
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Body */}
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
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Tags */}
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={closeCreateModal}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;
