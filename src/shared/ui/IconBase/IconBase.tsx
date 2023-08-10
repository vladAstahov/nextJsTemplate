import React, { useMemo } from "react";
import { IconName, PropsDefault } from "../../types/helpers";
import styles from './IconBase.module.scss'

export type IconBaseProps = {
    name: IconName
} & PropsDefault

export const IconBase = React.memo<IconBaseProps>(({ name, className }) => {
    const classes = useMemo(() => [
        styles.iconBase,
        styles[`iconBase--${name}`],
        className
    ].join(' '), [name, className])

    return <i className={classes}></i>
})