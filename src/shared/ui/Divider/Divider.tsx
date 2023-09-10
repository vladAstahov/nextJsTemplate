import React from "react";
import { PropsDefault } from "@/shared/types/helpers";
import styles from './Divider.module.scss'

export const Divider = React.memo<PropsDefault>(({ className }) => <div className={`${styles.root} ${className}`} />)