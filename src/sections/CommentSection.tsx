import Input from "../components/Input"
import Comment from "../components/Comment"


function CommentSection() {
  return (
    <div className="w-[80%] bg-white">
        <div className="flex flex-col items-center p-4">
            <div className="w-full">
          <Input/>
        </div>
        <hr className="text-gray-300 my-2 h-0.5 w-full" />
        <div className="w-full px-4 pt-4">
           <Comment/>
        </div>
        </div>
    </div>
  )
}

export default CommentSection