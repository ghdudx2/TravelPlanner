import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Roulette.module.css";
import userIcon from "../images/user.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";

function Roulette() {
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
          <div className={styles.contentTXT1}>Trip Roulette</div>
          <div className={styles.contentTXT2}>당신의 소중한 시간을 위해</div>
        </div>
        <div className={styles.line2}></div>
      </div>

      <table className={styles.category1}>
        <tr>
          <td>
            <button className={styles.categoryBtn}>서울</button>
          </td>
          <td>
            <button className={styles.categoryBtn}>전주</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.categoryBtn}>경기</button>
          </td>
          <td>
            <button className={styles.categoryBtn}>경주</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.categoryBtn}>인천</button>
          </td>
          <td>
            <button className={styles.categoryBtn}>강원</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.categoryBtn}>대구</button>
          </td>
          <td>
            <button className={styles.categoryBtn}>대전</button>
          </td>
        </tr>
        <tr>
          <td>
            <button className={styles.categoryBtn}>부산</button>
          </td>
          <td>
            <button className={styles.categoryBtn}>제주</button>
          </td>
        </tr>
      </table>
      <div className={styles.contentTXT3}>지역을 선택하면 선택한 지역의 핫플레이스를 찾아드려요</div>
      <div className={styles.contentBox2}>
      <button className={styles.reBtn}>다시하기</button>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent1}>
          <div className={styles.footerIcon}>아이콘아이콘</div>
          <div className={styles.footerAddress}>Address</div>
          <div className={styles.footerTel}>Tel</div>
          <div className={styles.footerEmail}>E-Mail</div>
        </div>

        <div className={styles.footerContent2}>
          <div className={styles.snsFrame}>
            <img src={instagram} className={styles.instagram} />
            <img src={facebook} className={styles.facebook} />
            <img src={kakao} className={styles.kakao} />
          </div>
        </div>

        <div className={styles.footerTXT1}>경기도 부천시 범안로 96번길 23</div>
        <div className={styles.footerTXT2}>02-123-1112</div>
        <div className={styles.footerTXT3}>dkssudgktpdyzz@naver.com</div>
        <hr />
      </footer>
    </div>
  );
}

export default Roulette;
