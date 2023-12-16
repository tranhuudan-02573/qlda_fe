import Home from "../pages/Home/Home.jsx";
import TrainingPage from "../pages/Training Page/TrainingPage.jsx";
import AnnouncementPage from "../pages/Announcement Page/AnnouncementPage.jsx";
import ContactPage from "../pages/Contact Page/ContactPage.jsx";
import LecturerPage from "../pages/Lecturer Page/LecturerPage.jsx";
import ResearchPage from "../pages/Research Page/ResearchPage.jsx";
import FormerStudent from "../pages/FormerStudent Page/FormerStudent.jsx";
import Regulation from "../pages/Regulation Page/Regulation.jsx";
import ExecutiveBoard from "../pages/ExecutiveBoard/ExecutiveBoard.jsx";
import Community from "../pages/Community/Community.jsx";
import Student from "../pages/StudentPage/Student.jsx";
import Forum from "../pages/ForumPage/Forum.jsx";
import ForumLayout from "../layouts/ForumLayout/ForumLayout.jsx";
import OutstandingPost from "../pages/OutstandingPost/OutstandingPost.jsx";
import Experience from "../pages/Experience Page/Experience.jsx";
import Member from "../pages/MemberPage/Member.jsx";
import LoginForm from "../pages/LoginPage/Login.jsx";
import Register from "../pages/RegisterPage/Register.jsx";
import DetailPost from "../pages/DetailPost/DetailPost.jsx";
import HeaderOnly from "../layouts/ForumLayout/NoNavbar/ForumLayout.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import AdminLayout from "../layouts/AdminLayout/AdminLayout.jsx";
import HomeAdmin from "../pages/Admin/HomePage/Home.jsx";
import UserManagement from "../pages/Admin/UserManagement/UserManagement.jsx";
import NotificationManagement from "../pages/Admin/NotificationManagement/NotificationManagement.jsx";
import PostManagement from "../pages/Admin/PostManagement/PostManagement.jsx";
import TrainManagement from "../pages/Admin/TrainManagement/TrainManagement.jsx";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/daotao", component: TrainingPage },
  { path: "/thongbao", component: AnnouncementPage },
  { path: "/nghiencuu", component: ResearchPage },
  { path: "/giangvien", component: LecturerPage },
  { path: "/lienhecuusinhvien", component: ContactPage },
  { path: "/gioithieuhoicuusinhvien", component: FormerStudent },
  { path: "/quyche", component: Regulation },
  { path: "/bandieuhanh", component: ExecutiveBoard },
  { path: "/congdong", component: Community },
  { path: "/sinhvien", component: Student },
  { path: "/forum", component: Forum, layout: ForumLayout },
  { path: "/allPosts", component: Forum, layout: ForumLayout },
  {
    path: "/outstandingPosts",
    component: OutstandingPost,
    layout: ForumLayout,
  },
  { path: "/experience", component: Experience, layout: ForumLayout },
  { path: "/members", component: Member, layout: ForumLayout },
  { path: "/login", component: LoginForm, layout: null },
  { path: "/signup", component: Register, layout: null },
  { path: "/post/:id", component: DetailPost, layout: HeaderOnly },
  { path: "/profile", component: Profile, layout: HeaderOnly },
  { path: "/admin/home", component: HomeAdmin, layout: AdminLayout },
  {
    path: "/admin/userManagement",
    component: UserManagement,
    layout: AdminLayout,
  },
  {
    path: "/admin/notificationManagement",
    component: NotificationManagement,
    layout: AdminLayout,
  },
  {
    path: "/admin/postManagement",
    component: PostManagement,
    layout: AdminLayout,
  },
  {
    path: "/admin/trainingManagement",
    component: TrainManagement,
    layout: AdminLayout,
  },
];

export { publicRoutes };
