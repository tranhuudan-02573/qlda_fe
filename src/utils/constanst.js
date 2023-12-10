export const categories = [
  { name: "Trang chủ", path: "/" },
  { name: "Đào tạo", path: "/daotao" },
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
export const categoriesForum = [
  { name: "Tất cả bài viết", path: "/allPosts" },
  { name: "Bài viết nổi bật", path: "/outstandingPosts" },
  { name: "Kinh nghiệm", path: "/experience" },
  { name: "Danh sách thành viên", path: "/members" },
];
