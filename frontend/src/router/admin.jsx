import Home from '../page/home/Home';
import  Reels  from '../page/reels/Reels';
import  Group  from '../page/group/Group';
import { Notification } from '../page/notification/Notification';
import { Profile } from '../page/profile/Profile';
import { Login } from '../page/login/Login';



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