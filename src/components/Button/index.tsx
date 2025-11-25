import styles from "./button.module.css"

interface ButtonProps {
    children: React.ReactNode
    props: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}