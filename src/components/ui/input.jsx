import { cn } from '@/lib/utils'
import React from 'react'

const Input = ({ id, type, placeholder, className, props }) => {
    return (
        <input {...props} type={type} id={id} placeholder={placeholder} name={type} required className={cn(`rounded-[10px] border border-black pl-6 lg:py-7 py-4 max-h-20 w-full outline-none`, className)} />
    )
}

export default Input