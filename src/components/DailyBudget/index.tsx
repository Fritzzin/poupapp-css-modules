import styles from "./dailybudget.module.css"

interface DailyBudgetProps {
    value: number
}

export const DailyBudget = ({ value }: DailyBudgetProps) => {
    const formattedBudget = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(value);
    return (
        <p className={styles.dailybudget}>
            {formattedBudget}
        </p>
    )
}