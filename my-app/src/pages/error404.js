import "../assets/css/error404.css"

const Error404 = () => {
  return (<section className="error-section">
    <h1 className="error-title">404</h1>
    <h2>Oups! La page que vous demandez n'existe pas.</h2>
    <a href="/">Retourner sur la page d'acceuil</a>
    </section>)
};

export default Error404;