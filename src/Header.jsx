import styles from "./Header.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header({
    mudarParaHome,
    mudarParaVantagens,
    mudarParaFuncionalidades,
    mudarParaContato,
    mudarParaTarefas
}) {
    return (
        <header>
            <div className={styles.container}>
            <h1 className="text-center">Saúde Infantil</h1>
                <nav>
                    <ul className="list-unstyled d-flex justify-content-center flex-wrap gap-3 mt-3">
                        <li>
                            <button
                                onClick={mudarParaHome}
                                className="text-decoration-none text-white btn btn-link"
                            >
                                Início
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={mudarParaVantagens}
                                className="text-decoration-none text-white btn btn-link"
                            >
                                Vantagens
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={mudarParaFuncionalidades}
                                className="text-decoration-none text-white btn btn-link"
                            >
                                Funcionalidades
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={mudarParaContato}
                                className="text-decoration-none text-white btn btn-link"
                            >
                                Contato
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={mudarParaTarefas}
                                className="text-decoration-none text-white btn btn-link"
                            >
                                Tarefas
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}