import { useState } from 'react'
import styles from './Home.module.css'
import baby from './assets/baby.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Clima from './Clima'

export default function Home() {
    return (
        <div>
            <section id="sobre" className={styles.intro}>
                    <div className={styles.container}>
                        <h2>Acompanhe a Recuperação da Criança com Facilidade</h2>
                        <p>Nosso aplicativo oferece todas as informações sobre o tratamento do seu filho, com lembretes e alertas importantes.</p>
                        <img src={baby} alt="Criança sendo tratada" className={`${styles['imagem-introducao']} img-fluid mt-4`}/>
                    </div>
            </section>
            <section id="funcionalidades" className={styles.funcionalidades}>
                <div className={`${styles.container} p-5 border border-2]`}>
                    <h2>Vantagens do App</h2>
                        <div className="row g-4">
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className={`${styles.card} h-100`}>
                                    <h3>Prontuário Digital</h3>
                                    <p>Acesso completo ao histórico de saúde da criança, com dados do tratamento.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className={`${styles.card} h-100`}>
                                    <h3>Notificações em Tempo Real</h3>
                                    <p>Receba alertas para medicações, exames e qualquer atualização médica.</p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className={`${styles.card} h-100`}>
                                    <h3>Lembretes Pós-Alta</h3>
                                    <p>Organize o pós-tratamento com lembretes automáticos e simples de acompanhar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <Clima />
        </div>
    );
}