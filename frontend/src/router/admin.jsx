import Home from '../page/user/Home';
import Group from '../page/user/Group';
import { Profile } from '../page/user/Profile';
import { Login } from '../page/user/Login';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/group', component: Group }, 
    { path: '/profile', component: Profile },
    { path: '/login', component: Login },
];

const privateRoutes = [

];

export { publicRoutes, privateRoutes }