const FigmaIcon = ({ size = 64 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 54 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <g clipPath="url(#figmaClip)">
                <path
                    d="M13.3333 80C20.6933 80 26.6667 74.0267 26.6667 66.6667V53.3333H13.3333C5.97333 53.3333 0 59.3067 0 66.6667C0 74.0267 5.97333 80 13.3333 80Z"
                    fill="#0ACF83"
                />
                <path
                    d="M0 40C0 32.64 5.97333 26.6667 13.3333 26.6667H26.6667V53.3333H13.3333C5.97333 53.3333 0 47.36 0 40Z"
                    fill="#A259FF"
                />
                <path
                    d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z"
                    fill="#F24E1E"
                />
                <path
                    d="M26.6667 0H40C47.36 0 53.3333 5.97333 53.3333 13.3333C53.3333 20.6933 47.36 26.6667 40 26.6667H26.6667V0Z"
                    fill="#FF7262"
                />
                <path
                    d="M53.3333 40C53.3333 47.36 47.36 53.3333 40 53.3333C32.64 53.3333 26.6667 47.36 26.6667 40C26.6667 32.64 32.64 26.6667 40 26.6667C47.36 26.6667 53.3333 32.64 53.3333 40Z"
                    fill="#1ABCFE"
                />
            </g>

            <defs>
                <clipPath id="figmaClip">
                    <rect width="53.3333" height="80" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default FigmaIcon;
