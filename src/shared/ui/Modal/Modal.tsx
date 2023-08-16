import React, { useEffect, useState } from "react";
import { IconBase } from "@/shared/ui/IconBase";
import styles from './Modal.module.scss'
import { useScrollDisable } from "@/shared/lib/utils/useScrollDisable";

export type ModalProps = React.PropsWithChildren & {
    wrapperClassname?: string
    isVisible: boolean
    onClose: () => void
}

let timeout: NodeJS.Timeout

export const Modal = React.memo<ModalProps>(
    ({ isVisible, onClose, children, wrapperClassname }) => {
        const [isAnimation, setIsAnimation] = useState(false)
        const [isShow, setIsShow] = useState(false)
        const { blockScroll, allowScroll } = useScrollDisable()

        useEffect(() => {
            if (isVisible) {
                setIsShow(true)
                blockScroll()
                timeout = setTimeout(() => {
                    setIsAnimation(true)
                }, 100)
            } else {
                setIsAnimation(false)
                allowScroll()
                timeout = setTimeout(() => {
                    setIsShow(false)
                }, 300)
            }

            return () => {
                clearTimeout(timeout)
            }
        }, [isVisible])

        return <>
            {isShow && (
                <div
                    className={`${styles.modal} ${isAnimation ? styles['is-active'] : ''}`}
                >
                    <div
                        className={`${styles.wrapper} ${wrapperClassname} ${isAnimation ? styles['is-active-wrapper'] : ''}`}>
                        <button className={styles.button} onClick={onClose}>
                            <IconBase className={styles.icon} name={'close'} />
                        </button>
                        <div className={styles.children}>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    }
)