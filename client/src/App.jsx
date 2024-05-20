
import { Navigate, Route, Routes } from "react-router-dom";

import NotificationPage from "./pages/notification/NotificationPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import ProfilePage from "./pages/profile/ProfilePage";
import Topbar from "./components/common/Topbar";
import {Sidebar} from "./components/common/Sidebar";
import { ProfileCard } from "./components/common/ProfileCard ";
// import ProfileCard from "./components/common/ProfileCard ";
import RightPanel from "./components/common/RightPanel";
import GeneralApp from "./pages/Chat.jsx/Index";


function App() {
	return(<>

	
   <div className="fixed top-0 right-5 size-full ">
             <Topbar/>
    </div>
     <div className=' flex justify-around max-w-full mx-auto'>
     
            <div className="fixed top-20 left-4 ">
                <Sidebar/>
           
            </div>
       		<div className="">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/notifications' element={<NotificationPage/>}/>
                <Route path='/Profile/:username' element={<ProfilePage />} />
                <Route path='/messages' element={<GeneralApp />} />
            </Routes>
            </div>
                    {/* 
                    1-add tobbar on top of all pages = done
                    2- add sidebar on the left of all pages =done
                    3- add logo  = still
                    4- adjust the components in home and then others
                    
                    TODO tobbar isn't working
                    */}
            


		
        </div>

	</>
	);
}

export default App;