import Image from "../../node_modules/next/image";
import styles from "./page.module.css";
import Portfolio from "@/components/portfolio/portfolio";

export default function Home(){
  return (
    <main className={styles.main}>
      <Portfolio/>
    </main>
  );
}