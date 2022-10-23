import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// CSS
import styles from "./Home.module.css";

//components
import PostDetail from "../../components/PostDetail";

const Home = () => {
  const { documents: posts, loading } = useFetchDocuments("posts");
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div className={styles.noposts}>
      {loading && <p>Carregando...</p>}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        <PostDetail/>
      </div>
    </div>
  );
};

export default Home;
