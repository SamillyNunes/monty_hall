import Card from "@/components/Card";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NumberInput from "@/components/NumberInput";
import { useState } from "react";

export default function Home() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [qtdDoorsWithGift, setQtdDoorsWithGift] = useState(1);

  return (
    <div className={styles.home} >
      <div>
        <Card bgColor="#c0392c" >
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput text="Qtde Portas?" value={qtdDoors} onChange={v => setQtdDoors(v)} />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput text="Porta com presente?" value={qtdDoorsWithGift} onChange={v => setQtdDoorsWithGift(v)} />
        </Card>
        <Card bgColor="#28a085" >
          {/* Abaixo foi setado o flex: 1 para que o component do link pudesse ser extendido por
          todo o componente pai, e assim o pai ser clicavel em todo seu conteudo */}
          <Link href={`/game/${qtdDoors}/${qtdDoorsWithGift}`}  className={styles.link} >
            <h2 >Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
