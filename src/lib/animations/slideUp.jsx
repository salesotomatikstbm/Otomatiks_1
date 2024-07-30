import React from 'react'
import { motion } from "framer-motion"

const SlideUp = ({ children, delay = 1 }) => {
    const slideLeftVariants = {
        offscreen: {
            y: 30,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: (delay === 1 ? 0 : 0.1 * delay)
            }
        }
    };
    return (
        <motion.div
            variants={slideLeftVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0 }}
            // className="overflow-hidden"
        >
            {children}
        </motion.div>
    )
}

export default SlideUp