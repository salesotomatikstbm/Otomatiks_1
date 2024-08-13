export const menuList = [
    {
        id: 1,
        path: "/",
        label: "Home",
        dropDownMenu: false
    },
    {
        id: 2,
        path: "/about-us",
        label: "About Us",
        dropDownMenu: false
    },
    {
        id: 3,
        path: "/services",
        label: "Our Courses",
        dropDownMenu: false
    },
    {
        id: 4,
        path: "/portfolio",
        label: "Services",
        dropDownMenu: [
            {
                id: 1,
                path: "/about-us",
                label: "School Program/Robotics Curriculum",
            },
            {
                id: 2,
                path: "/services",
                label: "Workshops",
            },
            {
                id: 3,
                path: "/faq",
                label: "Robotics/AI lab",
            },
            {
                id: 4,
                path: "/portfolio",
                label: "MSME",
            },
            {
                id: 5,
                path: "/contact-us",
                label: "CSR",
            },
        ]
    },
    {
        id: 5,
        path: "/blog",
        label: "Event",
        dropDownMenu: false
    },
    {
        id: 6,
        path: "/partners",
        label: "Partners",
        dropDownMenu: false
    },
    {
        id: 7,
        path: "/contact-us",
        label: "Blogs",
        dropDownMenu: false
    },
];
