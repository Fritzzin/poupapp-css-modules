import styles from "./progressbar.module.css"

interface ProgressBarProps {
    percent: number
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
    return (
        <div className={styles.wrapper}>
            <div
                className={styles.filled}
                style={{ width: `${percent.toString()}%` }}
            >
                {percent}%
            </div>
        </div>
    )
}