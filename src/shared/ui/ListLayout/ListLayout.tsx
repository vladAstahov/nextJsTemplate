import { PropsDefault } from "@/shared/types/helpers";
import { Button } from "@/shared/ui/Button";
import React from "react";
import styles from './ListLayout.module.scss'
import { ContainerLayout } from "@/shared/ui/ContainerLayout";

export type ListLayoutProps = PropsDefault & React.PropsWithChildren & {
    onPress: () => void
    title: string
}

export const ListLayout = React.memo<ListLayoutProps>(({ className, title, children, onPress }) => {
    return <ContainerLayout className={className} title={title}>
        <Button className={styles.button} ariaLabel="Добавть" onPress={onPress}>Добавить</Button>
        {children}
    </ContainerLayout>
})