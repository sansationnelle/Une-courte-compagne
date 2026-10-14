import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-red-900">ERREUR 404, page non trouvé</h1>
      <Link to="/">Retourner à l'accueil</Link>
    </section>
  );
};

export default NotFoundPage;
