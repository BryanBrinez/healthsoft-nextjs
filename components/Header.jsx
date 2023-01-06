//import styles from '../styles/Home.module.css'<Link href="/proyectos">Proyectos</Link>
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            HealthSoft
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/login">Login</Link>
            
          </nav>
        </div>
      </div>
    </header>
  );
}
