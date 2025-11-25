import { IconSavings } from "../icons"
import { ProgressBar } from "../ProgressBar"
import styles from "./savingsstatus.module.css"

interface SavingsStatusProps {
    percent: number
}

export const SavingsStatus = ({ percent }: SavingsStatusProps) => {
    return (
        <div className={styles.container}>
            <p>
                <IconSavings />
                Economizar
            </p>
            <ProgressBar percent={percent} />
        </div>
    )
}