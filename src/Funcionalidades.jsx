import styles from './Funcionalidades.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import calendario from './assets/calendario.png'
import historico from './assets/historico.png'
import comida from './assets/comida.png'
import fila from './assets/fila.png'

export default function Funcionalidades() {
    return (
        <div>
            <section className={`${styles.funcionalidades} py-5`}>
                <div className="container">
                <h2 className="text-center mb-5">Funcionalidades do App</h2>
                <div className="row g-4">

                    <div className="col-md-3">
                    <div className={`${styles.card} shadow-sm id="showCalendarioCard" style="cursor: pointer;`}>
                        <img src={calendario} alt="Calendário" className="img-fluid mb-3 rounded"/>
                        <h3>Calendário de Consultas</h3>
                        <p>Agende e acompanhe as consultas médicas do seu filho com facilidade.</p>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className={`${styles.card} shadow-sm onclick="window.location.href='historico.html'" style="cursor: pointer;`}>
                        <img src={historico} alt="Histórico" className="img-fluid mb-3 rounded"/>
                        <h3>Histórico Médico</h3>
                        <p>Registre o histórico de saúde para acompanhar o progresso de seu filho.</p>
                    </div>
                    </div>

                    <div className="col-md-3">
                    <div className={`${styles.card} shadow-sm onclick="window.location.href='monitoramento.html'" style="cursor: pointer;`}>
                        <img src={comida} alt="Monitoramento Nutricional" className="img-fluid mb-3 rounded"/>
                        <h3>Monitoramento Nutricional</h3>
                        <p>Acompanhe peso, altura, IMC e dieta das crianças durante e após a internação.</p>
                    </div>
                    </div>


                    <div className="col-md-3">
                    <div className={`${styles.card} shadow-sm id="showFilaOnlineCard" style="cursor: pointer;`}>
                        <img src={fila} alt="Fila Online" className="img-fluid mb-3 rounded"/>
                        <h3>Fila Online de Atendimento</h3>
                        <p>Visualize sua posição em tempo real e acompanhe o andamento do atendimento.</p>
                    </div>
                    </div>

                </div>
                </div>
            </section>
        </div>
    );
}