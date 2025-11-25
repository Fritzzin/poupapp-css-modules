import { Typography } from "../Typography"
import styles from "./usertitle.module.css"

export const UserTitle = () => {
    return (
        <div className={styles.container}>
            <Typography variant={'h1'}>
                Olá, Vinny!
            </Typography>

            <Typography variant={'body'}>
                Veja como estão suas finanças hoje.
            </Typography>
        </div>
    )
}