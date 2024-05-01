import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";
import tobbar from "./components/common/tobbar";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";

function App() {
	return (
	
	<div className="w-full  max-w-7xl">
		
		<div className='flex w-full mx-auto'>
		
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/Notifications' element={<NotificationPage />} />
				<Route path='/Profile/:username' element={<ProfilePage />} />
			</Routes>
		
		
		</div>
	</div>
	);
}
export default App;
