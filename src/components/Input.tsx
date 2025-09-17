
function Input() {
  return (
    <div className="flex flex-col w-full py-2 px-4 rounded-lg bg-[#f2f2f2] text-black">
          <div className="w-full py-4">
            <input type="text" placeholder="write text..." className="w-full px-4  text-black " />
          </div>
          <div className="flex justify-between items-center px-4 w-full bg-red-00">
            <div className="flex gap-4">
                <h3 className="cursor-pointer">B</h3>
                <h3 className="cursor-pointer">I</h3>
            </div>
            <div>
                <button className="rounded-full px-4 py-2 text-md font-medium bg-red-400 text-white cursor-pointer">Submit</button>
            </div>
          </div>
    </div>
  )
}

export default Input