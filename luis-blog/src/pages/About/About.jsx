import React from "react";
import { Link } from "react-router-dom";

// CSS
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Luis <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no fron-end e FireBaser
        no back-end
      </p>
      <Link to={"/post/create"} className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
