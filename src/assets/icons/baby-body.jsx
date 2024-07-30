import React from 'react'

const BabyBody = ({width='65', height='65'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 65 65" fill="none">
            <g clipPath="url(#clip0_5563_103)">
                <path d="M59.1191 25.7409L61.3261 19.7798C61.7248 18.703 61.6783 17.5362 61.1953 16.4945C60.7122 15.4529 59.8516 14.6636 58.7721 14.2724L56.3676 13.4008C52.187 11.8855 47.8127 11.1172 43.3662 11.1172H41.9911C41.5317 11.1172 41.1297 11.3581 40.9013 11.7198C35.4526 13.907 31.3391 13.8124 28.8227 13.333C26.7275 12.9339 25.3691 12.2117 24.8168 11.8724C24.6137 11.4272 24.1658 11.1172 23.6446 11.1172H22.2695C17.8229 11.1172 13.4486 11.8855 9.26813 13.4008L6.86363 14.2724C5.78415 14.6636 4.92354 15.4528 4.44048 16.4945C3.9573 17.5363 3.91096 18.703 4.30959 19.7798L6.51667 25.7409C7.2615 27.7526 9.39863 28.9062 11.4898 28.4242L14.5056 27.7289V54.1676C14.5056 60.1415 19.3657 65.0017 25.3396 65.0017H39.9545C45.9284 65.0017 50.7885 60.1415 50.7885 54.1676V27.65L54.1457 28.4241C56.2365 28.9065 58.3744 27.7525 59.1191 25.7409ZM31.9407 16.2046C34.3075 16.2046 37.126 15.7993 40.3691 14.6706C39.3936 17.9176 36.3783 20.2904 32.8179 20.2904C29.3864 20.2904 26.4615 18.086 25.3808 15.0193C26.8902 15.6208 29.0894 16.2046 31.9407 16.2046ZM28.4147 62.4236C27.9004 62.4236 27.4514 62.0892 27.3225 61.6104C27.1478 60.9601 26.9274 60.3122 26.6674 59.6846C26.6365 59.6097 26.6023 59.5285 26.5657 59.4422C27.3083 59.0681 28.3941 58.6128 29.7292 58.3172C32.7642 57.6451 35.7616 58.0365 38.6564 59.4786C38.6465 59.5022 38.6364 59.5262 38.6271 59.5488C38.3573 60.2003 38.1302 60.8733 37.9523 61.5493C37.8168 62.064 37.364 62.4235 36.8509 62.4235H28.4147V62.4236ZM39.2843 58.0655C35.2968 56.1082 31.7185 56.2806 29.3238 56.8228C27.9057 57.144 26.7486 57.6206 25.9287 58.029C24.4937 55.0195 21.5948 49.9901 17.8766 48.9888C17.4098 48.863 17.0837 48.4222 17.0837 47.9167V45.1382H48.2106V47.7809C48.2106 48.2864 47.8846 48.7273 47.4178 48.853C43.6281 49.8737 40.689 55.0795 39.2843 58.0655ZM48.2107 43.5914H17.0837V40.5202H48.2106L48.2107 43.5914ZM48.2107 38.9734H17.0837V32.2733H48.2106L48.2107 38.9734ZM17.0837 54.1675V51.4394C17.1246 51.452 17.1645 51.4668 17.2061 51.478C19.75 52.1632 22.5948 56.5889 24.2857 60.6712C24.5029 61.1958 24.6871 61.7368 24.8328 62.2794C24.8448 62.3237 24.8604 62.3661 24.8738 62.4095C20.5376 62.1671 17.0837 58.5635 17.0837 54.1675ZM40.3815 62.4126C40.4039 62.3442 40.4269 62.276 40.4454 62.2057C40.5938 61.6417 40.7833 61.0797 41.0088 60.5353C42.6998 56.453 45.5447 52.0273 48.0885 51.3423C48.1301 51.3311 48.1699 51.3163 48.2109 51.3037V54.1676C48.2107 58.5767 44.7363 62.1897 40.3815 62.4126ZM54.7251 25.9122L49.7893 24.774C49.4064 24.6856 49.0045 24.7768 48.697 25.0213C48.3897 25.2659 48.2106 25.6372 48.2106 26.03V30.7265H17.0837V26.1087C17.0837 25.7159 16.9046 25.3446 16.5974 25.1001C16.2898 24.8548 15.8847 24.7646 15.5052 24.8528L10.9108 25.9122C10.0801 26.1034 9.23055 25.6452 8.93449 24.8458L6.72741 18.8847C6.56898 18.4567 6.58738 17.9931 6.77946 17.579C6.97142 17.165 7.31343 16.8514 7.74228 16.6959L10.1469 15.8244C14.0449 14.4115 18.1236 13.695 22.2698 13.695H22.4348C23.0719 18.8582 27.4854 22.8682 32.8181 22.8682C38.1507 22.8682 42.5643 18.8582 43.2013 13.695H43.3665C47.5125 13.695 51.5913 14.4114 55.4893 15.8244L57.8938 16.6959C58.3228 16.8514 58.6648 17.165 58.8568 17.579C59.0487 17.993 59.0673 18.4566 58.9087 18.8846L56.7016 24.8456C56.4056 25.6451 55.5561 26.1039 54.7251 25.9122Z" fill="currentColor" />
                <path d="M18.9294 15.958C18.6617 15.9889 18.3941 16.0214 18.127 16.0559C17.421 16.1466 16.9221 16.7927 17.013 17.4987C17.0965 18.1491 17.6511 18.6234 18.2898 18.6234C18.3445 18.6234 18.4 18.6199 18.4558 18.6127C18.7124 18.5797 18.9691 18.5484 19.2262 18.5187C19.9333 18.4369 20.4401 17.7971 20.3582 17.0899C20.2762 16.3826 19.6352 15.8757 18.9294 15.958Z" fill="currentColor" />
                <path d="M13.7316 16.8704C12.4027 17.2177 11.2367 17.6364 10.1666 18.1502C9.52472 18.4583 9.25431 19.2283 9.56255 19.8701C9.78434 20.332 10.2452 20.6015 10.7254 20.6015C10.9124 20.6015 11.1026 20.5606 11.2824 20.4742C12.202 20.0326 13.2165 19.6697 14.3836 19.3645C15.0723 19.1845 15.4847 18.4801 15.3046 17.7914C15.1246 17.1028 14.4204 16.6902 13.7316 16.8704Z" fill="currentColor" />
                <path d="M40.2176 47.0078C39.7905 47.0078 39.4442 47.3541 39.4442 47.7812V49.3408C39.4442 49.7679 39.7905 50.1142 40.2176 50.1142C40.6447 50.1142 40.991 49.7679 40.991 49.3408V47.7812C40.991 47.354 40.6447 47.0078 40.2176 47.0078Z" fill="currentColor" />
                <path d="M42.6911 37.7119C43.1182 37.7119 43.4645 37.3656 43.4645 36.9385V35.3789C43.4645 34.9518 43.1182 34.6055 42.6911 34.6055C42.2641 34.6055 41.9177 34.9518 41.9177 35.3789V36.9385C41.9179 37.3656 42.2641 37.7119 42.6911 37.7119Z" fill="currentColor" />
                <path d="M37.6084 36.6259C38.0354 36.6259 38.3818 36.2796 38.3818 35.8525V34.2929C38.3818 33.8659 38.0354 33.5195 37.6084 33.5195C37.1813 33.5195 36.835 33.8659 36.835 34.2929V35.8525C36.835 36.2797 37.1812 36.6259 37.6084 36.6259Z" fill="currentColor" />
                <path d="M58.8168 48.9727C57.4965 48.9727 56.4261 50.043 56.4261 51.3634C56.4261 52.6838 57.4965 53.7541 58.8168 53.7541C60.1371 53.7541 61.2075 52.6838 61.2075 51.3634C61.2075 50.043 60.1371 48.9727 58.8168 48.9727Z" fill="currentColor" />
                <path d="M62.2198 39.6406C61.6607 39.6406 61.2074 40.094 61.2074 40.6531C61.2074 41.2122 61.6607 41.6655 62.2198 41.6655C62.779 41.6655 63.2323 41.2123 63.2323 40.6531C63.2323 40.0938 62.7791 39.6406 62.2198 39.6406Z" fill="currentColor" />
                <path d="M44.079 4.36916L46.108 5.28322C46.1948 5.32232 46.2637 5.39976 46.2984 5.49764L47.1105 7.78127C47.2253 8.10386 47.631 8.10386 47.7458 7.78127L48.5579 5.49764C48.5927 5.39989 48.6615 5.32245 48.7483 5.28322L50.7772 4.36916C51.0638 4.24004 51.0638 3.78327 50.7772 3.65416L48.7483 2.74009C48.6615 2.70099 48.5926 2.62342 48.5579 2.52567L47.7458 0.242036C47.631 -0.0806787 47.2253 -0.0806787 47.1105 0.242036L46.2984 2.52567C46.2636 2.62342 46.1948 2.70086 46.108 2.74009L44.079 3.65416C43.7923 3.78327 43.7923 4.23992 44.079 4.36916Z" fill="currentColor" />
                <path d="M8.68087 37.7008L6.65191 36.7867C6.56507 36.7476 6.49626 36.6701 6.46148 36.5723L5.64936 34.2888C5.53459 33.9662 5.12885 33.9662 5.01409 34.2888L4.20197 36.5724C4.16718 36.6702 4.09837 36.7476 4.01141 36.7869L1.98257 37.7009C1.69591 37.83 1.69591 38.2868 1.98257 38.4159L4.01141 39.3301C4.09825 39.3692 4.16718 39.4467 4.20197 39.5445L5.01409 41.8282C5.12885 42.1508 5.53459 42.1508 5.64936 41.8282L6.46148 39.5445C6.49626 39.4468 6.56507 39.3692 6.65191 39.3301L8.68087 38.4159C8.96753 38.2867 8.96753 37.83 8.68087 37.7008Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_5563_103">
                    <rect width="65" height="65" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default BabyBody