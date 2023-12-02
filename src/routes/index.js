import Home from "../pages/Home/Home.jsx";
import TrainingPage from "../pages/Training Page/TrainingPage.jsx";
import AdmissionsPage from "../pages/Admissions Page/AdmissionsPage.jsx";
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
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/daotao", component: TrainingPage },
  { path: "/tuyensinh", component: AdmissionsPage },
  { path: "/thongbao", component: AnnouncementPage },
  { path: "/nghiencuu", component: ResearchPage },
  { path: "/giangvien", component: LecturerPage },
  { path: "/lienhecuusinhvien", component: ContactPage },
  { path: "/gioithieuhoicuusinhvien", component: FormerStudent },
  { path: "/quyche", component: Regulation },
  { path: "/bandieuhanh", component: ExecutiveBoard },
  { path: "/congdong", component: Community },
  { path: "/sinhvien", component: Student },
  { path: "/diendan", component: Forum, layout: ForumLayout },
];

export { publicRoutes };
