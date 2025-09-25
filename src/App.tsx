import "./App.css";
import CommentSection from "./sections/CommentSection";
import { useComment } from "./hooks/useComment";

function App() {
  const { rootComments, comments, addComment, deleteComment } = useComment();

  return (
    <div className="space-y-6 px-6 pt-8 md:p-6 max-w-2xl mx-auto">
      <CommentSection
        rootComments={rootComments}
        allComments={comments}
        addComment={addComment}
        deleteComment={deleteComment}
      />
    </div>
  );
}

export default App;
