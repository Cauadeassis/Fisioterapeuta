import Image from "next/image";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <header>
        <nav>
          <div id="logo"><h3>Eq</h3></div>
          <a href="#">Inicio</a>
          <a href="#picture">Sobre</a>
          <a href="#feedback">Avaliações</a>
          <a href="#maps">Localização</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      <main>
        <section className={styles.gradientSection}>
          <h2>Afinal, quem é <b>Equi Librar</b></h2>
          <p>O melhor em fisioterapia de Muriaé e região</p>
          <a href="#picture">Conhecer</a>
        </section>

        <section id="picture" className={styles.pictureSection}>
          <h2>Pense um pouco:</h2>
          <div className={styles.imageContainer}>
            <p>
              A reabilitação é a nossa maior meta, porque nada nos inspira mais
              do que ter a certeza de que ajudamos pessoas a retomarem suas vidas.
            </p>
            <Image
              className={styles.image}
              src="/doutor.jpeg"
              alt="Primeiro doutor"
              width={480}
              height={320}
              priority
            />
          </div>
          <div className={styles.imageContainer}>
            <p>
              Sou formado pela USP, lá conheci pessoas e conhecimento que
              levarei para toda a minha vida. Toda pessoa é única, cada pessoa
              tem suas necessidades, por isso, cada trabalho é único!
            </p>
            <Image
              className={styles.image}
              src="/exemploDeFisioterapia.jpg"
              alt="Fisioterapia"
              width={480}
              height={320}
              priority
            />
          </div>
        </section>

        <section id="feedback" className={styles.feedbackSection}>
          <h2>Vejam o que pensam sobre a gente:</h2>
          <div className={styles.cardsContainer}>
            <div>
              <h3>Francisco Silva</h3>
              <p>5 ⭐ — Excelente profissional, recomendo para todos meus amigos!</p>
            </div>
            <div>
              <h3>Leonardo Carvalho</h3>
              <p>5 ⭐ — Sensacional, resultado incrível. Recomendo muito!</p>
            </div>
            <div>
              <h3>Cauã Leitão</h3>
              <p>5 ⭐ — Atendimento excelente e muito atencioso. Voltarei sempre!</p>
            </div>
          </div>
        </section>

        <section id="maps" className={styles.mapsSection}>
          <h2>Localização</h2>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.573889248258!2d-46.63330828446589!3d-23.550520021643734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5950ff303de1%3A0x5e073575e5b56b27!2sPra%C3%A7a%20da%20Rep%C3%BAblica%2C%20Centro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001001-000!5e0!3m2!1spt-BR!2sbr!4v1636496767037!5m2!1spt-BR!2sbr"
              width="100%"
              height="420"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
}
