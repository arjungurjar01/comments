import { useState } from "react";

type InputProps  = {
  addComment: (value: string, parentId :  number | null) => void;
  parentId?: number | null,
  placeholder? : string ,
  className? : string ,
  onSubmit? : () => void ,
};
function Input({
   addComment, 
  parentId = null,
  placeholder = "Write a comment...",
  className = "",
  onSubmit,
 }: InputProps ) {

  const [input, setInput] = useState<string>("");

  const handlePost = () => {
    if (!input.trim()) return; //prevent empty comments
    addComment(input, parentId ?? null);
    setInput("");
    if(onSubmit) onSubmit() ;
  };

  return (
    <div className={`flex flex-col w-full py-2 px-4 rounded-lg bg-[#f2f2f2] text-black ${className}`}>
      <div className="w-full py-4">
        <input
          type="text"
          value={input}
          required
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 text-black rounded-md border focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>
      <div className="flex justify-between items-center px-4 w-full bg-red-00">
        <div className="flex gap-4">
          <h3 className="cursor-pointer">B</h3>
          <h3 className="cursor-pointer">I</h3>
        </div>
        <div>
          <button
            onClick={handlePost}
            className="rounded-full px-4 py-2 text-md font-medium bg-red-400 text-white cursor-pointer transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
