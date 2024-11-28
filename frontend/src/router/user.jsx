import Home from '../page/user/Home';
import Group from '../page/user/Group';
import Course from '../page/user/Course';
import Notifi from '../page/user/Notifi';

const userRoutes = [
    {path: '/user/home', component: Home},
    {path: '/user/group', component: Group},
    {path: '/user/course', component: Course},
    {path: '/user/notifi', component: Notifi},
]

export default userRoutes;