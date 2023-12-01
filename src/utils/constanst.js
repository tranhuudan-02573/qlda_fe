export const categories = [
  { name: "Trang chủ", path: "/" },
  { name: "Đào tạo", path: "/daotao" },
  { name: "Tuyển sinh", path: "/tuyensinh" },
  { name: "Thông báo", path: "/thongbao" },
  { name: "Nghiên cứu", path: "/nghiencuu" },
  { name: "Giảng viên", path: "/giangvien" },
  { name: "Sinh viên", path: "/sinhvien" },
  {
    name: "Liên hệ cựu sinh viên",
    path: "/lienhecuusinhvien",
    children: [
      {
        title: "Giới thiệu hội cựu sinh viên",
        path: "/gioithieuhoicuusinhvien",
      },
      {
        title: "Quy chế",
        path: "/quyche",
      },
      {
        title: "Ban điều hành Hội cựu sinh viên",
        path: "/bandieuhanh",
      },
      {
        title: "Cộng đồng",
        path: "/congdong",
      },
    ],
  },
];
