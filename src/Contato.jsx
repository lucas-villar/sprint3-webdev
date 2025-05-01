import styles from './Contato.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function Contato() {
    return (
        <div>
            <section className={styles.contato}>
                <div className={styles.container}>
                <h2 className="text-center mb-3">Fale Conosco</h2>
                <p className="text-center mb-5">Tem dúvidas, sugestões ou precisa de ajuda? Envie uma mensagem abaixo e responderemos o quanto antes.</p>

                <div className="d-flex justify-content-center">
                    <form action="#" method="post" className="w-100" style={{maxWidth: '800px'}}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" id="nome" className="form-control" placeholder="Seu nome completo" required aria-label="Nome completo"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" id="email" className="form-control" placeholder="Seu e-mail" required aria-label="Endereço de e-mail"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mensagem" className="form-label">Mensagem</label>
                        <textarea id="mensagem" className="form-control" rows="4" placeholder="Digite sua mensagem..." required aria-label="Mensagem"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-5 py-2 shadow">
                        <i className="fas fa-paper-plane me-2"></i> Enviar Mensagem
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </section>
        </div>
    );
}