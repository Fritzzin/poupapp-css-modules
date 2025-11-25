import styles from "./aside.module.css"
import Image from "next/image"
import logo from "@/assets/logo.svg"

interface AsideProps {
    // children: React.ReactNode
}

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image src={logo} alt={"Logo Poupapp"} />
            <footer className={styles.footer}>
                Desenvolvido por Fritz. Projeto fictício sem fins comerciais.
            </footer>
        </aside>
    );
}