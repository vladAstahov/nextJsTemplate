import { InfoSectionLayout, InfoSectionLayoutProps } from "@/entities/main"
import styles from './Sheme.module.scss'

const data: InfoSectionLayoutProps['data'] = [
    {
        title: "Оплачиваете участие в мероприятии",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "Оставляете свои контакты в форме",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "Проверяете на почте ссылку на участие в игре",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    },
    {
        title: "В обозначенное время переходите по ссылке",
        description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
    }
]

export const Sheme = () => (
    <InfoSectionLayout
        className={styles.root}
        title="Схема процесса регистрации в квизе"
        data={data}
    />
)