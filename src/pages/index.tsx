import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  return (
    <div className={styles.home} >
      <div>
        <Card bgColor="#c0392c" >
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
        <Card bgColor="#28a085" >
          {/* Abaixo foi setado o flex: 1 para que o component do link pudesse ser extendido por
          todo o componente pai, e assim o pai ser clicavel em todo seu conteudo */}
          <Link href={`/game/4/2`}  className={styles.link} >
            <h2 >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
