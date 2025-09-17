import dummy from "./../assets/dummy-user-profile.png" ;
function Comment() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-4 items-center">
          <img src={dummy} alt="dp" className="w-10" />
          <p className="text-gray-800 text-xl font-medium">username</p>
          <p className="text-gray-400 text-sm font-normal">20 minutes ago</p>
      </div>
      <div className="text-start ml-14 py-2">
          <p className="text-gray-800 text-md font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, debitis?</p>
      </div>
      <div className="flex gap-4 ml-14">
            <p>like 23</p>
            <p>Dislike 1</p>
            <p>Reply</p>
          </div>
    </div>
  )
}

export default Comment