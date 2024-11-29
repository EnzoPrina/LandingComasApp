
"use client";
// src/pages/index.tsx

import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <div className={styles.container}>
      {/* Barra de navegação */}
{/* Barra de navegação */}
{/* <nav className={styles.navbar}>
  <div className={styles.logo}>
    <img src="/Logo-07.png" alt="ComasApp Logo" className={styles.logoImage} />
  </div>

  <div className={styles.menuIcon} >
    <span className={styles.menuLine}></span>
    <span className={styles.menuLine}></span>
    <span className={styles.menuLine}></span>
  </div>
</nav> */}

<section className={styles.section}>
  <div className={styles.leftColumn}>
    <img src="/Slogan-07.png" alt="logo en grande" className={styles.logoGrande} />
    <h1 className={styles.title}>Bem-vindo ao ComasApp 🚀</h1>
    <h2 className={styles.subtitle}></h2>
    <p className={styles.slogan}>
      Aproveite todo o seu potencial. <br /> Eleve a eficiência da sua produção com tecnologia inovadora, controle em tempo real e gestão simplificada.
    </p>
    <div className={styles.infoIcon} onClick={() => setModalOpen(true)}> ℹ️ </div>
    <p className={styles.slogan}>
      Faça o download da nossa demo e descubra como otimizar a sua produção.!
    </p>
    {/* Botón para descargar el APK */}
    <a href="/comasapp.apk" download className={styles.demoButton}>
      Baixe aqui!
    </a>
  </div>
  <div className={styles.rightColumn}>
    <img src="/app.png" alt="App" className={styles.mockupImage} />
  </div>
</section>

      {/* Modal de informação */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <p>
              Esta aplicação não é propriedade de Forvia Faurecia, mas foi concebida e desenvolvida como uma ferramenta de apoio para otimizar o fluxo de trabalho e facilitar a gestão de produção.
            </p>
            <button className={styles.closeButton} onClick={() => setModalOpen(false)}>Fechar</button>
          </div>
        </div>
      )}

{/* Seção de Vantagens e Características com fundo blur */}
<div className={styles.twoColumnSection}>
  {/* Coluna esquerda */}
  <div className={styles.textColumn}>
    <section id="vantagens" className={`${styles.advantagesSection} ${styles.blurSection}`}>
      <h2 className={styles.sectionTitle}>Vantagens da Aplicação</h2>
      <ul className={styles.textList}>
        <li>🚀 Controlo eficiente de inventário em tempo real.</li>
        <li>🚀 Interface intuitiva e amigável para os utilizadores.</li>
        <li>🚀 Acesso rápido: Navegação simplificada para consultar linhas e referências.</li>
        <li>🚀 Económica: Poupa tempo e recursos na gestão manual.</li>
        <li>🚀 Moderna e escalável: Tecnologia inovadora para expansões futuras.</li>
{/*         <li>🚀 Notificações automáticas para revisão de produção.</li>
        <li>🚀 Comparação em tempo real com objetivos de produção.</li> */}
      </ul>
      <img src="/Listo 2.png" alt="Imagem de Vantagens" className={styles.image} />
    </section>
  </div>

  {/* Coluna direita */}
  <div className={styles.textColumn}>
    <section id="caracteristicas" className={`${styles.featuresSection} ${styles.blurSection}`}>
      <h2 className={styles.sectionTitle}>Principais Características</h2>
      <ul className={styles.textList}>
        <li>✨ Acesso rápido às linhas de produção e referências.</li>
        <li>✨ Contagem automática dos materiais disponíveis.</li>
        <li>✨ Modal de referências com materiais e quantidades.</li>
        <li>✨ Menu inferior com navegação rápida.</li>
      </ul>
      <img src="/Listo.png" alt="Imagem de Características" className={styles.image} />
    </section>
  </div>
</div>

      

      {/* Título dos Testemunhos */}
      <h2 id="testemunhos" className={styles.testimonialsTitle}>O que Dizem os Nossos Usuários</h2>

      {/* Testemunhos em linhas */}
      <section className={styles.testimonialsSection}>
        {[...Array(1)].map((_, index) => (
          <div key={index} className={styles.testimonialCard}>
            <p className={styles.testimonialText}>“O ComasApp tem-me ajudado a organizar o meu trabalho durante o meu turno, utilizando o Notes para organização e o Contagem para anotar o material que tinha na linha e no armazen para ter o material exato para produção e assim evitar carregar material de volta.”</p>
            <p className={styles.testimonialAuthor}>— Operador de Logistica, Forvia</p>
          </div>
        ))}
      </section>

      {/* Seção de download */}
      <section id="download" className={`${styles.downloadSection} ${styles.blurSection}`}>
        <h2 className={styles.sectionTitle}>Pronto para Otimizar a Sua Produção?</h2>
        <p className={styles.downloadText}>Baixe o ComasApp hoje e melhore a eficiência das suas linhas de produção.</p>
        <a href="#" className={styles.downloadButton}>Baixar Agora</a>
      </section>


                  {/* Footer com blur */}
            <footer className={`${styles.footer} ${styles.blurSection}`}>
              <p className={styles.footerText}>
                Esta aplicação foi concebida e desenvolvida por Enzo Prina.
              </p>
            </footer>
    </div>



  );

  
};



export default Home;
