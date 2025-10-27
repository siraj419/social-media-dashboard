import React, { useState } from 'react'
import PostCard from '../components/PostCard'
import CreatePostModal from '../components/CreatePostModal';

const posts = [
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
      { userId: 3, comment: "Finally understood closures.", likes: 7 }
    ]
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
      { userId: 4, comment: "Grid is my favorite.", likes: 2 }
    ]
  },
  {
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
  }
];


const Dashbord = () => {

    const [createModalOpen, setCreateModalOpen] = useState(false);

    const openCreateModal = () => {
        setCreateModalOpen(true);
    }

    const closeCreateModal = () => {
        setCreateModalOpen(false);
    }


  return (
    <div>
        {/* Header */}
        <header
            className='bg-gray-200 flex p-4 justify-between items-center border-b-2 border-gray-900'
        >
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <input
                type='text'
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
        </header>
        <div className='flex justify-end p-5'>
            <button 
                className='px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md'
                onClick={openCreateModal}
            >
                + Add Post
            </button>
        </div>
        <div
            className='flex flex-wrap justify-center gap-5 mt-5'
        >
            {
                posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))
            }
            
        </div>
        {
            createModalOpen && (
                <CreatePostModal
                    closeCreateModal={closeCreateModal}
                />
            )
        }
    </div>
  )
}

export default Dashbord