import Input from "../components/Input"
import Comment from "../components/Comment"
import type { CommentType } from "../types/comment";
import type { CommentMap } from "../types/comment";


type CommentSectionProps = {
  rootComments: CommentType[]; // all root-level comments
  allComments: CommentMap;
  addComment: (value: string, parentId: number | null) => void;
  deleteComment: (id: number) => void;
};

function CommentSection({rootComments,allComments,addComment,deleteComment}:CommentSectionProps) {
  return (
    <div className="w-84 md:w-[80%] lg:w-[100%] bg-white h-full">
         <div className="flex flex-col items-center p-4">
           <div className="w-full">
          <Input addComment={addComment} parentId={null} placeholder="write a comment..."/>
        </div>
        <hr className="text-gray-300 my-2 h-0.5 w-full" />

         {rootComments.length > 0 ? (
        rootComments.map((comment) => (
          <div key={comment.id} className="w-full px-2 pt-2">
            <Comment
              comment={comment}
              allComments={allComments}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No comments yet</p>
      )}
        </div>
    </div>
  )
}

export default CommentSection