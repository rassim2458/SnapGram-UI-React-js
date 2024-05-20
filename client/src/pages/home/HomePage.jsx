	import { useState } from "react";
	import Posts from "../../components/common/Posts";
	import CreatePost from "./CreatePost";
	import { ProfileCard } from "../../components/common/ProfileCard ";
// import ProfileCard from "./components/common/ProfileCard ";
import RightPanel from "../../components/common/RightPanel";
	// import RightPanel from "../../components/common/RightPanel.jsx";
	// import { Sidebar } from "../../components/common/Sidebar";
	// import { ProfileCard } from "../../components/common/ProfileCard .jsx";
	const HomePage = () => {
		const [feedType, setFeedType] = useState("forYou");
		{/*build the refresh*/} 
		function refreshPage(){
			window.location.reload();
		}
		

		return (
	<>
	<div className="container flex  justify-around">
	<div className="w-full max-w-7xl  ">
	<div className='flex-[4_4_0]  rounded-2xl shadow-2xl m-auto min-h-screen justify-around'>
				{/* <div className="navbar bg-base-100">
					<div className="flex-1">
						<a className="btn btn-ghost text-xl">EduConnect</a>
					</div>
					<div className="flex-none gap-2">
							<div className="form-control">
								<input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
							</div>
							<div className="dropdown dropdown-end">
								<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
									<div className="w-10 rounded-full">
									<img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
									</div>
								</div>
							
					</div>
				</div>
	</div> */}
		<div className='flex w-full mx-auto break-inside-avoid '>
			
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
		</div>
			<div className=" ml-4flex-1 place right-0">
				<div>
				{/* <ProfileCard
					imageSrc="put link"
					username="John Doe"
					email="johndoe@example.com"
					description="Enthusiastic developer and lifelong learner."
				/> 
				<RightPanel/> */}
			</div>
			</div>
		</div>
		<div className="fixed top-20 right-4">
			<ProfileCard
				imageSrc="/avatar-placeholder.png"
				username="issam"
				email="issam@example.com"
				description="web app dev ..."
			/>  
			  <RightPanel />  
			</div> 
	</>
		);
	};
	export default HomePage;