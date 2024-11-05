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
        label: "About",
        dropDownMenu: false
    },
    {
        id: 3,
        path: "/robotics-coding-courses",
        label: "Courses",
        dropDownMenu: false
    },
    {
        id: 4,
        path: "/robotics-ai-lab",
        label: "Services",
        dropDownMenu: [
            {
                id: 1,
                path: "/robotics-coding-school-curriculum",
                label: "School Curriculum",
            },
            {
                id: 2,
                path: "/workshop",
                label: "Workshops",
            },
            {
                id: 3,
                path: "/robotics-ai-lab",
                label: "Robotics & AI Lab",
            },
            {
                id: 4,
                path: "/msme",
                label: "MSME",
            },
            {
                id: 5,
                path: "/csr",
                label: "CSR",
            },
        ]
    },
    {
        id: 5,
        path: "/partners",
        label: "Partners",
        dropDownMenu: false
    },
    {
        id: 6,
        path: "/event",
        label: "Event",
        dropDownMenu: [
            {
                id: 1,
                path: "/robotica-2025",
                label: "Robotica 2025",
            },
            {
                id: 2,
                path: "/robotica-2024",
                label: "Robotica 2024",
            },
            {
                id: 3,
                path: "/robotica-2023",
                label: "Robotica 2023",
            },
           
        ]
    },
    {
        id: 7,
        path: "/blog",
        label: "Blogs",
        dropDownMenu: false
        
    },
    {
        id: 8,
        path: "https://otomatiks.free.nf/?product=product-1",
        label: "Shop",
        dropDownMenu: false
         // path: "/shop",
    },
];
