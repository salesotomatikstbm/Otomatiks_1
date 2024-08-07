export const menuList = [
    {
        id: 1,
        path: "/",
        label: "Home",
        dropDownMenu: false
        // dropDownMenu: [
        //     {
        //         id: 1,
        //         path: "/",
        //         label: "Home-1",
        //     },
        //     {
        //         id: 2,
        //         path: "/home-2",
        //         label: "Home-2",
        //     },
        // ]
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
        // dropDownMenu: [
        //     {
        //         id: 1,
        //         path: "/services",
        //         label: "Services",
        //     },
        //     {
        //         id: 2,
        //         path: "/service-details",
        //         label: "Service Details",
        //     },
        // ]
    },
    {
        id: 5,
        path: "/portfolio",
        label: "Services",
        // dropDownMenu: false
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
        id: 4,
        path: "/Blog",
        label: "Event",
        dropDownMenu: false
        // dropDownMenu: [
        //     {
        //         id: 1,
        //         path: "/blog",
        //         label: "Blog",
        //     },
        //     {
        //         id: 2,
        //         path: "/blog-details",
        //         label: "Blog Details",
        //     },
        // ]
    },
    {
        id: 5,
        path: "/Blog",
        label: "Partners",
        dropDownMenu: false
        // dropDownMenu: [
        //     {
        //         id: 1,
        //         path: "/blog",
        //         label: "Blog",
        //     },
        //     {
        //         id: 2,
        //         path: "/blog-details",
        //         label: "Blog Details",
        //     },
        // ]
    },
    {
        id: 6,
        path: "/contact-us",
        label: "Blogs",
        dropDownMenu: false
    },
]