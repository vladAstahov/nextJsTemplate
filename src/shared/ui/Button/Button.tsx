import React, {useMemo} from "react";
import './Button.module.scss'

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
   className
}) => {
    const classes = useMemo(() => [
        'button',
        `button--view-${view}`,
        ...(isBold && 'is-bold'),
        className
    ].join(' '), [className, view])

    return <button className={classes}>{ children }</button>
})