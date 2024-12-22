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
        path: "/robotics-coding-courses",
        label: "Courses",
        dropDownMenu: false
    },
    {
        id: 4,
        label: "Academic Program",
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
            // {
            //     id: 4,
            //     path: "/msme",
            //     label: "MSME",
            // },
            {
                id: 5,
                path: "/csr",
                label: "CSR",
            },
        ]
    },
    {
        id: 5,
        path: "/franchise",
        label: "Franchise",
        dropDownMenu: false
    },
    {
        id: 6,
        label: "Event",
        dropDownMenu: [
            {
                id: 1,
                path: "/robotica",
                label: "Robotica",
            },
            // {
            //     id: 2,
            //     path: "/robotica-2024",
            //     label: "Past Event",
            // },
            // {
            //     id: 3,
            //     path: "/robotica-2023",
            //     label: "Robotica 2023",
            // },
           
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
        path: "/shop",
        label: "Shop",
        dropDownMenu: false
         // path: "/shop",
    },
];
