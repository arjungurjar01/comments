import { useState } from "react";
import dummy from "./../assets/dummy-user-profile.png";
import type { CommentType } from "../types/comment";
import type { CommentMap } from "../types/comment";
import Input from "./Input";

interface CommentProps {
  comment: CommentType;
  allComments: CommentMap;
  addComment: (value: string, parentId: number | null) => void;
  deleteComment: (id: number) => void;
}

function Comment({
  comment,
  allComments,
  addComment,
  deleteComment,
}: CommentProps) {
  const [showReply, setShowReply] = useState(false);

  const toggleReply  = () => setShowReply((prev) => !prev);

   const isRoot = comment.parentId === null;
  const bgColor = isRoot ? "bg-white/50" : "bg-gray-100";

  return (
    <div className={`flex flex-col  p-2 rounded-md ${bgColor}`}>
      <div className="flex gap-4 items-center">
        <img src={dummy} alt="dp" className="w-8" />
        <p className="text-gray-800 text-md font-medium">username</p>
        <p className="text-gray-400 text-sm font-normal">20 minutes ago</p>
      </div>
      <div className="text-start ml-14 py-2">
        <p className="text-gray-800 text-md font-normal">{comment.value}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4 ml-14 text-black text-sm font-normal">
          <p>like 23</p>
          <p>Dislike 1</p>
          <p onClick={toggleReply} className="cursor-pointer">
           {showReply ? "Cancel" : "Reply"}
          </p>
          <p
            onClick={() => deleteComment(comment.id)}
            className="cursor-pointer"
          >
            Delete
          </p>
        </div>

        {/* Reply section */}
        <div className="bg-red-80">
          {showReply && (
            <div className="pl-2 pt-2">
              <Input
                onSubmit={()=>setShowReply(false)}
                addComment={addComment}
                parentId={comment.id}
              />
            </div>
          )}
        </div>
      </div>
      {/* nested comments */}
      <div className="">
        {comment.children.map((childId) => {
          const childComment = allComments[childId];
          if (!childComment) return null;
          return(
          <div className="" key={childId}>
            <Comment
              key={childId}
              comment={childComment}
              allComments={allComments}
              addComment={addComment}
              deleteComment={deleteComment}
            />
          </div>)
})}
      </div>
    </div>
  );
}

export default Comment;
