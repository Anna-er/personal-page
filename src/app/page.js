import Image from 'next/image'
import styles from './page.module.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #607D8B',
  margin:"10px",
  boxShadow: "5px 5px 20px #455A64",
}


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.head}>
        Ermolovich Anna
      </h1>
      <div className={styles.main_container}>
      {/* <Image
        сlassName={styles.img1}
        src="/photos/1.png"
        width={300}
        height={300}
        alt="Picture 1"
        style={imageStyle}
      /> */}
      <div className={styles.line}>
      <p><span className={styles.super_text}>Hi!</span> My name is <b>Anna</b> I am 19 years old student of Software Engineering at <i>St. Petersburg University</i>.</p>
      <Image
        сlassName={styles.img2}
        src="/photos/4.jpg"
        width={250}
        height={250}
        alt="Picture 4"
        style={imageStyle}
      />
      {/* <Image
        сlassName={styles.img3}
        src="/photos/3.jpg"
        width={300}
        height={300}
        alt="Picture 3"
        style={imageStyle}
      /> */}
      </div>
      <h3 className={styles.text}>Languages and Tools:</h3>
      <div className={styles.icons}>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/> </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="50" height="50"/> </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/> </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/> </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="50" height="50"/> </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="50" height="50"/> </a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50"/> </a>
        <a href="https://kotlinlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" alt="kotlin" width="50" height="50"/> </a>
        <a href="https://www.open-std.org/jtc1/sc22/wg14/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="50" height="50"/> </a>
        <a href="https://ocaml.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ocaml/ocaml-original.svg" alt="ocaml" width="50" height="50"/> </a>
        <a href="https://vitejs.org/" target="_blank" rel="noreferrer"> <img src="https://vitejs.dev/logo.svg" alt="vitejs" width="50" height="50"/> </a>
      </div>
      <h3 className={styles.text}>Contact with me:</h3>
      <div className={styles.icons}>
        <a className={styles.button} href="https://t.me/a_s_ermo" target="_blank" rel="noreferrer"> Telegram <FaTelegramPlane /></a>
        <a className={styles.button} href="https://github.com/Anna-er" target="_blank" rel="noreferrer"> Github <FaGithub /></a>
        <a className={styles.button} href="https://discordapp.com/users/1022589769991061555/" target="_blank" rel="noreferrer"> Discord <FaDiscord /></a>
        <a className={styles.button} href="mailto:brungilda364@gmail.com" target="_blank" rel="noreferrer"> Gmail <SiGmail /></a>
      </div>
      </div>
    </main>
  )
}
