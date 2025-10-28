import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import EditPostModal from "../components/EditPostModal";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: "p1",
      title: "Understanding JavaScript Closures",
      body: "Closures are one of the most powerful features in JavaScript. They allow inner functions to access outer function variables even after the outer function has returned.",
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
      body: "Both Grid and Flexbox are layout systems in CSS, but they serve different purposes. Grid is two-dimensional while Flexbox is one-dimensional.",
      userId: 2,
      tags: ["css", "frontend", "layout"],
      likes: 98,
      dislikes: 5,
      comments: [
        { userId: 1, comment: "Nice comparison!", likes: 4 },
        { userId: 4, comment: "Grid is my favorite.", likes: 2 },
      ],
       
    id: "p3",
    title: "Building REST APIs with FastAPI",
    body: "FastAPI is a modern web framework for building APIs with Python. It’s fast, easy to use, and fully supports async programming.",
    userId: 3,
    tags: ["python", "fastapi", "backend"],
    likes: 145,
    dislikes: 9,
    comments: [
      { userId: 1, comment: "Love FastAPI!", likes: 6 },
      { userId: 2, comment: "Helpful for my project.", likes: 3 }
    ]
  },
  {
    id: "p4",
    title: "State Management in React",
    body: "Managing state in React can be done using Context API, Redux, or other libraries depending on project complexity.",
    userId: 4,
    tags: ["react", "state", "redux"],
    likes: 134,
    dislikes: 6,
    comments: [
      { userId: 3, comment: "Redux Toolkit is great.", likes: 5 },
      { userId: 5, comment: "I prefer Zustand.", likes: 2 }
    ]
  },
  {
    id: "p5",
    title: "Intro to TypeScript",
    body: "TypeScript adds static typing to JavaScript, helping developers catch errors early and improve code quality.",
    userId: 5,
    tags: ["typescript", "javascript", "frontend"],
    likes: 156,
    dislikes: 4,
    comments: [
      { userId: 2, comment: "Love TS for large projects!", likes: 8 },
      { userId: 6, comment: "Still learning it.", likes: 3 }
    ]
  },
  {
    id: "p6",
    title: "Optimizing Web Performance",
    body: "Improving load times involves code splitting, lazy loading, image compression, and efficient caching strategies.",
    userId: 6,
    tags: ["performance", "frontend", "web"],
    likes: 112,
    dislikes: 5,
    comments: [
      { userId: 1, comment: "Good performance tips.", likes: 4 },
      { userId: 7, comment: "Useful for my portfolio site.", likes: 2 }
    ]
  },
  {
    id: "p7",
    title: "Introduction to Docker",
    body: "Docker simplifies application deployment by containerizing software and ensuring consistency across environments.",
    userId: 7,
    tags: ["docker", "devops", "containers"],
    likes: 176,
    dislikes: 11,
    comments: [
      { userId: 4, comment: "Docker changed my workflow.", likes: 9 },
      { userId: 8, comment: "Great overview.", likes: 4 }
    ]
  },
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
  },
  {
    id: "p9",
    title: "Responsive Design Best Practices",
    body: "Responsive design ensures your web pages look great on all devices by using flexible layouts and media queries.",
    userId: 9,
    tags: ["css", "responsive", "frontend"],
    likes: 125,
    dislikes: 7,
    comments: [
      { userId: 5, comment: "Super useful.", likes: 6 },
      { userId: 2, comment: "Always use media queries wisely.", likes: 3 }
    ]
  },
  {
    id: "p10",
    title: "Version Control with Git",
    body: "Git is essential for tracking changes in code. Learn how to use branches, commits, and pull requests effectively.",
    userId: 10,
    tags: ["git", "version-control", "collaboration"],
    likes: 200,
    dislikes: 12,
    comments: [
      { userId: 1, comment: "Git saved my life.", likes: 9 },
      { userId: 7, comment: "Everyone should learn Git.", likes: 5 }
    ]
    },
  ]);
  const [filteredPosts, setFilteredPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const handleEdit = (id, updatedPost) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, ...updatedPost } : p)));
    setIsEditOpen(false);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };
  
  useEffect(()=>{
    if(searchTerm){
      setFilteredPosts(posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())  ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }else{
      setFilteredPosts(posts);
    }
  }, [searchTerm]);

  const onLike = (id) => {
    console.log(id)
    setFilteredPosts(filteredPosts.map((post)=>{
      if(post.id == id){
        post.likes++;
      }
      return post
    }));
  }

  const onDislike = (id) => {
    console.log(id)
    setFilteredPosts(filteredPosts.map((post)=>{
      if(post.id == id){
        post.dislikes++;
      }
      return post
    }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 text-gray-900">
      <header className="backdrop-blur-md bg-white/40 border border-white/30 shadow-lg p-4 flex justify-between items-center rounded-xl">
        <h1 className=" text-3xl font-bold text-gray-800 tracking-wide">Dashboard</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </header>

      <div className="flex justify-end p-5">
        <button
          className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 hover:shadow-md transition-all duration-200"
          onClick={openCreateModal}
        >
          + Add Post
        </button>
      </div>
   
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {filteredPosts.map((post) => (
          <PostCard
            key={post.id}
            onClick={()=> navigate(`/post/${post.id}`)}
            post={post}
            onDelete={() => handleDelete(post.id)}
            onEditClick={() => {
              setEditingPost(post);
              setIsEditOpen(true);
            }}
            onDislike={onDislike}
            onLike={onLike}
          />
        ))}
      </div>

      {createModalOpen && <CreatePostModal closeCreateModal={closeCreateModal} />}

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
