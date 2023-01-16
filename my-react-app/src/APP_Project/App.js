import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";
import { useState } from "react";
import "./App.css";

function App() {
  const [comments,setComments] = useState([])
  return (
    <div>
      <CommentForm setComments={setComments} />
      <CommentList allcomments={comments} />
    </div>
  );
}

export default App;