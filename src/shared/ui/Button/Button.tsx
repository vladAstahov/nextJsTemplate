import React, { useMemo } from "react";
import styles from './Button.module.scss'
import { PropsDefault } from "@/shared/types/helpers";

export type ButtonProps = PropsDefault & React.PropsWithChildren & {
    view?: 'primary' | 'secondary'
    isBold?: boolean
    ariaLabel: string
    onPress: () => void
}

export const Button = React.memo<ButtonProps>(({
    children,
    ariaLabel,
    view = 'primary',
    isBold = false,
    className,
    onPress
}) => {
    const classes = useMemo(() => [
        styles.button,
        styles[`button--view-${view}`],
        ...(isBold ? [styles.isBold] : []),
        className
    ].join(' '), [className, view])

    return (
        <button
            aria-label={ariaLabel}
            className={classes}
            onClick={onPress}>
            {children}
        </button>
    )
})