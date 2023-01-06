import Link from "next/link";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import VaccinesIcon from '@mui/icons-material/Vaccines';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grupouno}>

      <div className={styles.box}>
                <h2 className={styles.titulos}>SOBRE NOSOTROS</h2>
                <p className={styles.ep}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p className={styles.ep}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>


        <div className={styles.box}>
          <Link href="/">
            <Image
              className={styles.imagen}
              src="/pngegg.png"
              alt="/"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className={styles.box}>
          <h2 className={styles.titulos}>Contacto</h2>
          <div className={styles.redes}>

          <Link href="https://twitter.com/Yiton_"><TwitterIcon/></Link>
          <Link href="https://www.instagram.com/bryanbrinez/"><InstagramIcon/></Link>
          <Link href="https://github.com/BryanBrinez"><GitHubIcon/></Link>
          <Link href="https://www.facebook.com/"><FacebookIcon/></Link>
            
          
          
          
          
          
          
          
          </div>
        </div>
      </div>
      <div className={styles.grupodos}>
        <small>
          &copy; 2023 <b>SinergiaSoft</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
}
