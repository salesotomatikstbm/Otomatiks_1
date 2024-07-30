import React from 'react'

const GoogleMap = () => {
    return (
        <div className="lg:pt-15 lg;pb-15 pb-10 pt-10 overflow-x-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d28617.938088161813!2d88.9847771!3d26.2862453!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1716712456909!5m2!1sen!2sbd" width="1920" height="497" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap