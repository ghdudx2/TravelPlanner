import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Record.module.css";
import userIcon from "../images/user.png";

function Record() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">ABC</Link>
        </div>
        <div className={styles.roulette}>
          <Link to="/Roulette">Roulette</Link>
        </div>
        <div className={styles.record}>
          <Link to="/Record">Record</Link>
        </div>
        <div className={styles.register}>
          <Link to="/Register">Register</Link>
        </div>
        <Link to="/Login">
          <img src={userIcon} className={styles.user} />
        </Link>
      </div>

      <div className={styles.content1}>
        <div className={styles.line1}></div>
        <div className={styles.contentBox1}>
          <div className={styles.contentTXT1}>Carnet de Voyage</div>
          <div className={styles.contentTXT2}>
            소중한 추억을 기록해보는건 어때요?
          </div>
        </div>
        <div className={styles.line2}></div>
      </div>
    </div>
  );
}

export default Record;
