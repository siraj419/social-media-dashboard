import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import EditPostModal from "../components/EditPostModal";

const Dashboard = () => {
  const navigate = useNavigate();

  // ✅ Load posts from localStorage (or default sample posts)
  const defaultPosts = [
    {
      id: "p1",
      title: "Understanding JavaScript Closures",
      body: "Closures allow inner functions to access outer function variables even after the outer function has returned.",
      userId: 1,
      tags: ["javascript", "functions", "closures"],
      likes: 120,
      dislikes: 8,
      comments: [
        { userId: 2, comment: "Very well explained!", likes: 10 },
        { userId: 3, comment: "Finally understood closures.", likes: 7 },
      ],
    },
    {
      id: "p2",
      title: "CSS Grid vs Flexbox",
      body: "Grid is two-dimensional while Flexbox is one-dimensional — both are essential layout tools in CSS.",
      userId: 2,
      tags: ["css", "frontend", "layout"],
      likes: 98,
      dislikes: 5,
      comments: [
        { userId: 1, comment: "Nice comparison!", likes: 4 },
        { userId: 4, comment: "Grid is my favorite.", likes: 2 },
      ],
    },
  ];

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // ✅ Load from localStorage
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || defaultPosts;
    setPosts(savedPosts);
    setFilteredPosts(savedPosts);
  }, []);

  // ✅ Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // ✅ Search filter
  useEffect(() => {
    if (searchTerm.trim()) {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  // ✅ Create post modal controls
  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const addPost = (newPost) => {
    const updated = [...posts, { ...newPost, id: Date.now().toString(), likes: 0, dislikes: 0, comments: [] }];
    setPosts(updated);
    closeCreateModal();
  };

  // ✅ Edit post
  const handleEdit = (id, updatedPost) => {
    const updated = posts.map((p) => (p.id === id ? { ...p, ...updatedPost } : p));
    setPosts(updated);
    setIsEditOpen(false);
  };

  // ✅ Delete post
  const handleDelete = (id) => {
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
  };

  // ✅ Like / Dislike
  const onLike = (id) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post))
    );
  };

  const onDislike = (id) => {
    setPosts(
      posts.map((post) => (post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 text-gray-900">
      {/* Header */}
      <header className="backdrop-blur-md bg-white/40 border border-white/30 shadow-lg p-4 flex justify-between items-center rounded-xl m-4">
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
          Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </header>

      {/* Add Post Button */}
      <div className="flex justify-end p-5">
        <button
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 hover:shadow-md transition-all duration-200"
          onClick={openCreateModal}
        >
          + Add Post
        </button>
      </div>

      {/* Posts */}
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onClick={() => navigate(`/post/${post.id}`)}
            onDelete={() => handleDelete(post.id)}
            onEditClick={() => {
              setEditingPost(post);
              setIsEditOpen(true);
            }}
            onDislike={() => onDislike(post.id)}
            onLike={() => onLike(post.id)}
          />
        ))}
      </div>

      {/* Modals */}
      {createModalOpen && (
        <CreatePostModal closeCreateModal={closeCreateModal} addPost={addPost} />
      )}

      {isEditOpen && (
        <EditPostModal
          closeEditModal={() => setIsEditOpen(false)}
          post={editingPost}
          onSave={handleEdit}
        />
      )}
    </div>
  );
};

export default Dashboard;
