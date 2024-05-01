import { useState } from "react";
import Posts from "../../components/common/Posts";
import CreatePost from "./CreatePost";
import RightPanel from "../../components/common/RightPanel.jsx";
import Sidebar from "../../components/common/Sidebar.jsx"

const HomePage = () => {
	const [feedType, setFeedType] = useState("forYou");
    {/*build the refresh*/} 
	function refreshPage(){
		window.location.reload();
	}
	

	return (
<>

<div className="w-full max-w-7xl">

	<div className='flex w-full mx-auto'>
		<Sidebar />
		{/* New setteings please remind me TODO*/}
		<div className='flex-[4_4_0] min-h-screen w-auto min-w-fit'>
		
			
			{/*Navbar end*/}
		{/* Header */}
		<div className='flex w-full'>
			<div
				className={
				"flex justify-center flex-1 p-3 btn btn-ghost transition duration-300 cursor-pointer relative"
				}
				onClick={() => setFeedType("forYou")}
			>
			For you
		{feedType === "forYou" && (
		<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
		)}
		</div>
	
		<div
		className='flex justify-center flex-1 p-3 btn btn-ghost transition duration-300 cursor-pointer relative'
		onClick={() => setFeedType("following")}
		>
		Following
		{feedType === "following" && (
		<div className='absolute bottom-0 w-10  h-1 rounded-full bg-primary'></div>
		)}
		</div>
		
		</div>

		{/*  CREATE POST INPUT */}
		<CreatePost />

		{/* POSTS */}
		<Posts />
		
		</div>
		
   </div>
  
	</div>
	<RightPanel/>
</>
	);
};
export default HomePage;