import Login from '~/containers/pages/login/Login';
import Home from '~/containers/pages/trang-chu/TrangChu';
import MasterLayout from '~/containers/layouts/MasterLayout';
import Page500 from '~/containers/pages/result/Page500';
import Page403 from '~/containers/pages/result/Page403';
import Page404 from '~/containers/pages/result/Page404';
import DuLieu from '~/containers/pages/du-lieu/DuLieu';
import DonVi from '~/containers/pages/don-vi/DonVi';
import LinhVuc from '~/containers/pages/linh-vuc/LinhVuc';
import TinTuc from '~/containers/pages/tin-tuc/TinTuc';
import DonVi from "~/containers/pages/DonVi/DonVi";
import LinhVuc from "~/containers/pages/LinhVuc/LinhVuc";

export const appRoutes = [
    {
        path: '/login',
        element: <Login />,
        protected: false,
    },
    {
        path: '/403',
        element: <Page403 />,
        protected: false,
    },
    {
        path: '/404',
        element: <Page404 />,
        protected: false,
    },
    {
        path: '/500',
        element: <Page500 />,
        protected: false,
    },
    {
        path: '/',
        element: <MasterLayout child={<Home />} />,
        protected: false,
        can: ['edit_data'],
    },
    {
        path: '/du-lieu',
        element: <MasterLayout child={<DuLieu />} />,
        protected: false,
    },
    {
        path: '/don-vi',
        element: <MasterLayout child={<DonVi />} />,
        protected: false,
    },
    {
        path: '/linh-vuc',
        element: <MasterLayout child={<LinhVuc />} />,
        protected: false,
    },
    {
        path: '/tin-tuc',
        element: <MasterLayout child={<TinTuc />} />,
        protected: false,
    },
    {
        path: '/lien-he',
        element: <MasterLayout child={<Home />} />,
        protected: false,
    },
    {
        path: '/gioi-thieu',
        element: <MasterLayout child={<Home />} />,
        protected: false,
    },
    {
        path: '/dieu-khoan-su-dung',
        element: <MasterLayout child={<Home />} />,
        protected: false,
    },
    {
        path: '/chinh-sach-bao-mat',
        element: <MasterLayout child={<Home />} />,
        protected: false,
    },
    // {
    //     path: 'category',
    //     element: <MasterLayout child={<ListCategory />} />,
    //     protected: true,
    // },
    // {
    //     path: 'category/add',
    //     element: <MasterLayout child={<AddCategory />} />,
    //     protected: true,
    // },
    // {
    //     path: 'category/edit/:id',
    //     element: <MasterLayout child={<EditCategory />} />,
    //     protected: true,
    // },
];
