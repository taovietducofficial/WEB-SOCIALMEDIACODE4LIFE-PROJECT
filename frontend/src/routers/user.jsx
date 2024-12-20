import Home from '../page/user/Home';
import Group from '../page/user/Group';
import Course from '../page/user/Course';
import Notifi from '../page/user/Notifi';
import Profile from '../page/user/Profile';
import Friend from '../page/user/Friend';
import Login from '../page/user/Login';
import Signup from '../page/user/Signup';

const userRoutes = [
    {path: '/user/home', component: Home},
    {path: '/user/groups', component: Group},
    {path: '/user/courses', component: Course},
    {path: '/user/notifications', component: Notifi},
    {path: '/user/profile', component: Profile},
    {path: '/user/friends', component: Friend},
    {path: '/', component: Login},
    {path: '/signup', component: Signup},
]

export default userRoutes;