import Home from '../page/user/Home';
import Reels from '../page/user/Reels';
import Group from '../page/user/Group';
import { Notification } from '../page/user/Notification';
import { Profile } from '../page/user/Profile';
import { Login } from '../page/user/Login';

// Public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/reels', component: Reels },
    { path: '/group', component: Group }, 
    { path: '/notification', component: Notification },
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }