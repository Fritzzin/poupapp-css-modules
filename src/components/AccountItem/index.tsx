import { IconBank } from "../icons"
import styles from "./accountitem.module.css"

interface AccountItemProps {
    account: {
        bank: string
        balance: number
    }
}

export const AccountItem = ({ account }: AccountItemProps) => {
    const formattedBalance = new Intl.NumberFormat('pt-br', { currency: "BRL", style: "currency" }).format(account.balance);
    return (
        <div className={styles.container}>
            <div className={styles.bank}>
                <IconBank />
                {account.bank}
            </div>
            <div className={styles.balance}>
                <p className={styles.title}>Saldo</p>
                <p>{formattedBalance} </p>
            </div>
        </div>
    )
}