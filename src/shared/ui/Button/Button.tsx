import React, { useMemo } from "react";
import styles from './Button.module.scss'
import { PropsDefault } from "@/shared/types/helpers";

export type ButtonProps = PropsDefault & React.PropsWithChildren & {
    view?: 'primary' | 'secondary'
    isBold?: boolean
    isDisabled?: boolean
    ariaLabel: string
    onPress: () => void
}

export const Button = React.memo<ButtonProps>(({
    children,
    ariaLabel,
    view = 'primary',
    isBold = false,
    isDisabled = false,
    className,
    onPress
}) => {
    const classes = useMemo(() => [
        styles.button,
        styles[`button--view-${view}`],
        ...(isBold ? [styles.isBold] : []),
        ...(isDisabled ? [styles.isDisabled] : []),
        className
    ].join(' '), [className, view, isBold, isDisabled])

    return (
        <button
            aria-label={ariaLabel}
            className={classes}
            disabled={isDisabled}
            onClick={onPress}>
            {children}
        </button>
    )
})