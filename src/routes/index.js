import Home from "../pages/Home/Home.jsx";
import TrainingPage from "../pages/Training Page/TrainingPage.jsx";
import AdmissionsPage from "../pages/Admissions Page/AdmissionsPage.jsx";
import AnnouncementPage from "../pages/Announcement Page/AnnouncementPage.jsx";
import ContactPage from "../pages/Contact Page/ContactPage.jsx";
import LecturerPage from "../pages/Lecturer Page/LecturerPage.jsx";
import ResearchPage from "../pages/Research Page/ResearchPage.jsx";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/daotao", component: TrainingPage },
  { path: "/tuyensinh", component: AdmissionsPage },
  { path: "/thongbao", component: AnnouncementPage },
  { path: "/nghiencuu", component: ResearchPage },
  { path: "/giangvien", component: LecturerPage },
  { path: "/lienhecuusinhvien", component: ContactPage },
];

export { publicRoutes };
