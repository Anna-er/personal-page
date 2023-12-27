import Image from 'next/image'
import styles from './page.module.css'
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const imageStyle = {
  borderRadius: '50%',
  margin:"10px",
}


export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.head}>
        Ермолович Анна
      </h1>
      <div className={styles.main_container}>
      <div className={styles.line}>
      <p><span className={styles.super_text}>Привет!</span> Меня зовут <b>Анна</b>. Я студентка второго курса программной инженерии в <i>Санкт-Петербургском государственном университете</i>.</p>
      <Image
        сlassName={styles.img2}
        src="/photos/4.jpg"
        width={250}
        height={250}
        alt="Picture 4"
        style={{ ...imageStyle, boxShadow: "5px 5px 20px #455A64" }}
      />
      </div>
      <h3 className={styles.text}>Навыки:</h3>
      <div className={styles.icons}>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/> </a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="60" height="60"/> </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> </a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="60" height="60"/> </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60"/> </a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="60" height="60"/> </a>
        <a href="https://kotlinlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kotlin/kotlin-original.svg" alt="kotlin" width="60" height="60"/> </a>
        <a href="https://www.open-std.org/jtc1/sc22/wg14/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="60" height="60"/> </a>
        <a href="https://ocaml.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ocaml/ocaml-original.svg" alt="ocaml" width="60" height="60"/> </a>
        <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://vitejs.dev/logo.svg" alt="vitejs" width="60" height="60"/> </a>
      </div>
      <h3 className={styles.text}>Проекты:</h3>
      <div className={styles.icons}>
      <div class={styles.card}>
      <a href="https://github.com/spbu-coding-2022/trees-2" target="_blank">
        <Image
          src="/photos/trees.png"
          width={150}
          height={150}
          alt="Trees-2"
          style={imageStyle}/>
        <div class={styles.container}>
          <h3>Trees-2</h3>
            Визуализатор бинарных деревьев
        </div>
        </a>
        </div>
        <div class={styles.card}>
        <a href="https://github.com/Anna-er/desbordante-web" target="_blank">
        <Image
          src="/photos/desbordante.png"
          width={150}
          height={150}
          alt="Desbordante"
          style={imageStyle}/>
        <div class={styles.container}>
          <h3>Desbordante</h3>
            Рефакторинг экранов просмотра результата задачи
        </div>
        </a>
        </div>
        <div class={styles.card}>
        <a href="https://quiet-otter-d0b928.netlify.app/" target="_blank">
        <Image
          src="/photos/hydra.png"
          width={150}
          height={150}
          alt="Hydra"
          style={imageStyle}/>
        <div class={styles.container}>
          <h3>Hydra</h3>
            Первый учебный проект по верстке на чистом HTML&CSS
        </div>
      </a>
      </div>
      </div>
      <h3 className={styles.text}>Контакты:</h3>
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
