import Login from "../containers/pages/login/Login";
import Home from "../containers/pages/trang-chu/Home";
import MasterLayout from "../containers/layouts/MasterLayout";
import Page500 from "../containers/pages/result/Page500";
import Page403 from "../containers/pages/result/Page403";
import Page404 from "../containers/pages/result/Page404";
import AddCategory from "../containers/pages/category/add/AddCategory";
import ListCategory from "../containers/pages/category/list/ListCategory";
import EditCategory from "../containers/pages/category/update/EditCategory";



export const appRoutes = [
  {
    path: "/login",
    element: <Login />,
    protected: false
  },
  {
    path: "/403",
    element: <Page403 />,
    protected: false
  },
  {
    path: "/404",
    element: <Page404 />,
    protected: false
  },
  {
    path: "/500",
    element: <Page500 />,
    protected: false
  },
  {
    path: "/",
    element: <MasterLayout child={<Home />} />,
    protected: true,
    can: ["nguoi_dan", "can_bo"]
  },
  {
    path: "category",
    element: <MasterLayout child={<ListCategory />} />,
    protected: true
  },
  {
    path: "category/add",
    element: <MasterLayout child={<AddCategory />} />,
    protected: true
  },
  {
    path: "category/edit/:id",
    element: <MasterLayout child={<EditCategory />} />,
    protected: true
  }
];
