import React, { useEffect } from 'react';

const StickyHeader = ({ children, top = '0px' }) => {
    useEffect(() => {
        const top_header = document.getElementById('top-header');
        const header = document.getElementById('header');
        const header_container = document.getElementById('header-container');

        // Apply overflow-x: hidden at the body level
        document.body.style.overflowX = 'hidden';

        let prevScrollpos = window.scrollY;

        if (prevScrollpos > header_container.clientHeight) {
            header.classList.add("header-pinned");
            header.style.top = top_header ? `-${top_header.clientHeight}px` : "0px";
        }

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (prevScrollpos > currentScrollPos && currentScrollPos > header_container.clientHeight) {
                header.classList.add("header-pinned");
                header.style.top = top_header ? `-${top_header.clientHeight}px` : top;

                // Set header height in root HTML
                if (top_header) {
                    document.documentElement.style.setProperty('--header-height', `${header_container.clientHeight - top_header.clientHeight}px`);
                } else {
                    document.documentElement.style.setProperty('--header-height', `${header_container.clientHeight}px`);
                }
            } else {
                header.classList.remove("header-pinned");
                header.style.top = `-${header_container.clientHeight}px`;

                document.documentElement.style.setProperty('--header-height', '0px');
            }
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

            // Cleanup body overflow-x style
            document.body.style.overflowX = '';
        };
    }, [top]);

    return <>{children}</>;
};

export default StickyHeader;
