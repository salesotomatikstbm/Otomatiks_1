import React from 'react';

function PopupVideo({ videoSrc, handler }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative w-full max-w-4xl bg-white rounded-lg">
                <button
                    onClick={handler}
                    className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-800"
                    aria-label="Close Video"
                >
                    &times;
                </button>
                <iframe
                    title="video"
                    className="w-full h-[60vh] rounded-lg"
                    src={videoSrc}
                    frameBorder="0"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default PopupVideo;
