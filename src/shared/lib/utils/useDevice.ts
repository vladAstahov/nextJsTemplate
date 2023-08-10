"use client";

import { useEffect, useState } from "react";

export const useDevice = () => {
    const [device, setDevice] = useState<{
        desktop: boolean,
        tablet: boolean,
        mobile: boolean
    }>({
        desktop: false,
        tablet: false,
        mobile: false
    })

    const onResize = () => {
        setDevice({
            desktop: window.innerWidth >= 1200,
            tablet: window.innerWidth >= 650 && window.innerWidth < 1200,
            mobile: window.innerWidth >= 320 && window.innerWidth < 650
        })
    }

    useEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return {
        device
    }
}