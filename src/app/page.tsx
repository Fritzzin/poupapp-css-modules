import styles from "./page.module.css"
import { Container } from "@/components/Container";
import { Aside } from "@/components/Aside";
import { SearchBar } from "@/components/SearchBar";
import { Main } from "@/components/Main";
import { UserTitle } from "@/components/UserTitle";
import Card from "@/components/Card";
import { DailyBudget } from "@/components/DailyBudget";
import { SavingsStatus } from "@/components/SavingsStatus";
import { Transactions } from "@/components/Transactions";
import { Accounts } from "@/components/Accounts";

export default function Home() {
  return (
    <>
      <Container>
        <Aside />
        <Main>
          <div className={styles.container}>
            <SearchBar />
            <UserTitle />
            <section className={styles.grid}>
              <Card>
                <Card.Header>
                  Orçamento diário disponível:
                </Card.Header>
                <Card.Body>
                  <DailyBudget value={250} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  Progresso da meta financeira
                </Card.Header>
                <Card.Body>
                  <SavingsStatus percent={40} />
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  Movimentação Financeira
                </Card.Header>
                <Card.Body>
                  <Transactions />
                </Card.Body>
              </Card>

              <Card>
                <Card.Header>
                  Minhas Contas 
                </Card.Header>
                <Card.Body>
                  <Accounts/>
                  
                </Card.Body>
              </Card>
            </section>
          </div>
        </Main>
      </Container>
    </>
  );
}
