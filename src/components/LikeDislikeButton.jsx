import {ThumbsUp,ThumbsDown } from "lucide-react";
import { useState,useEffect} from "react";

const Likedislikebuttons=({ postId })=> {
  const [likes,setLikes]=useState(0);
  const [dislikes,setDislikes]=useState(0);
  const [userReaction,setUserReaction]=useState(null); 
  useEffect(()=>{
    const storedPosts=JSON.parse(localStorage.getItem("posts"))||[];
    const currentPost=storedPosts.find(p=>p.id===postId);
    if (currentPost) {
      setLikes(currentPost.likes || 0);
      setDislikes(currentPost.dislikes || 0);
      setUserReaction(currentPost.userReaction || null);
    }
  }, [postId]);

  const updateLocalStorage = (newLikes, newDislikes, newReaction) => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const updated = storedPosts.map(p =>
      p.id === postId
        ? { ...p, likes: newLikes, dislikes: newDislikes, userReaction: newReaction }
  :p
    );
    localStorage.setItem("posts", JSON.stringify(updated));
  };

  const handleLike=()=>{
    let newLikes=likes;
    let newDislikes=dislikes;
    let newReaction=userReaction;

    if (userReaction === "like") {
      
      newLikes -= 1;
      newReaction = null;
    } else if (userReaction==="dislike") {
      newDislikes-=1;
      newLikes+=1;
      newReaction="like";
    } else {
      newLikes+=1;
      newReaction="like";
    }

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserReaction(newReaction);
    updateLocalStorage(newLikes, newDislikes, newReaction);
  };

  const handleDislike = () => {
    let newLikes=likes;
    let newDislikes=dislikes;
    let newReaction=userReaction;

    if (userReaction==="dislike") {
      newDislikes-=1;
      newReaction=null;
    } else if (userReaction==="like") {
      newLikes-=1;
      newDislikes+=1;
      newReaction="dislike";
    } else {
      newDislikes+=1;
      newReaction="dislike";
    }

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserReaction(newReaction);
    updateLocalStorage(newLikes, newDislikes, newReaction);
  };

  return (
    <div className="flex gap-6 items-center text-sm text-gray-600">
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 ${
          userReaction === "like" ? "text-blue-600" : "hover:text-blue-600"
        }`}
      >
        <ThumbsUp size={20} /> {likes}
      </button>

      <button
        onClick={handleDislike}
        className={`flex items-center gap-2 ${
          userReaction === "dislike" ? "text-red-600":"hover:text-red-600"
        }`}
      >
        <ThumbsDown size={20}/>{dislikes}
      </button>
    </div>
  );
};

export default Likedislikebuttons;
