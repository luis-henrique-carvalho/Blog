<<<<<<< HEAD
import React from "react";
import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    

    //validar imagem url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    //criar o array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    //chegar todos os valores
    if(!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos")
    }
    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });


    //redirect from home page

    navigate("/")
  };
  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense em um bom título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>

        <label>
          <span>Conteudo:</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteudo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por virgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Criar post</button>}
        {response.loading && <button className="btn">Aguarde...</button>}
        {response.error && <p className="error"> {response.error}</p>}
        {formError && <p className="error"> {formError}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
=======
import React from 'react'
import styles from './CreatePost.module.css'

const CreatePost = () => {
  return (
    <div><h1>CreatePost</h1></div>
  )
}

export default CreatePost
>>>>>>> 6d8f552d73ff3dcbcc4d27cc6ad096e346018d29
