import { useState } from "react";
import styles from "./vantagens.module.css";
import notific from "./assets/notific.png";
import emergencia from "./assets/emergencia.png";
import especialista from "./assets/especialista.png";


export default function Vantagens() {
    return (
        <div>
            <section className={styles.funcionalidades}>
                <div className={styles.container}>
                    <h2>Vantagens do App</h2>
                    <div
                        className={styles.vantagenscards}
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                            justifyContent: "center",
                        }}
                    >
                        {/* Card de Educação Infantil com link */}
                        <div className={styles.card} style={{ width: "300px" }}>
                            <a href="./educação.html" className="text-decoration-none">
                                <img
                                    src={notific}
                                    alt="Educação Infantil"
                                    className={styles.imagemintroducao}
                                    style={{ marginBottom: "1rem" }}
                                />
                                <h3>Educação Infantil</h3>
                                <p>Feito especialmente para os primeiros papais e mamães</p>
                            </a>
                        </div>

                        {/* Card de Alertas de Emergência */}
                        <a
                            href="./alertas.html"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className={styles.card} style={{ width: "300px", cursor: "pointer" }}>
                                <img
                                    src={emergencia}
                                    alt="Alertas de Emergência"
                                    className={styles.imagemintroducao}
                                    style={{ marginBottom: "1rem" }}
                                />
                                <h3>Alertas de Emergência</h3>
                                <p>
                                    Receba notificações imediatas em caso de urgência médica,
                                    mantendo você informado a qualquer momento.
                                </p>
                            </div>
                        </a>

                        {/* Card de Contato com Especialistas */}
                        <div
                            className={styles.card}
                            style={{ width: "300px", cursor: "pointer" }}
                            onClick={() => (window.location.href = "especialistas.html")}
                        >
                            <img
                                src={especialista}
                                alt="Especialistas"
                                className={styles.imagemintroducao}
                                style={{ marginBottom: "1rem" }}
                            />
                            <h3>Contato com Especialistas</h3>
                            <p>
                                Conecte-se rapidamente com profissionais especializados para tirar
                                dúvidas ou agendar novas consultas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.intro} style={{ marginTop: "2rem" }}>
                <div className={styles.container}>
                    <h2>Comece agora</h2>
                    <p>Tenha acesso a um cuidado infantil inteligente, rápido e sempre à mão.</p>
                    <a
                        href="#"
                        className={styles.ctabutton}
                        style={{
                            backgroundColor: "#3c9ecf",
                            color: "white",
                            padding: "1rem 2rem",
                            fontSize: "1.2rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            display: "inline-block",
                            marginTop: "1rem",
                        }}
                    >
                        Baixar o App
                    </a>
                </div>
            </section>
        </div>
    );
}