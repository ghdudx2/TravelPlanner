import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import userIcon from "../images/user.png";
import exTimeBlock from "../images/timeblock.png";
import kyunghwa from "../images/KH.png";
import busan from "../images/BS.png";
import dalaeng from "../images/DL.png";
import kkotji from "../images/KJ.png";
import sungsan from "../images/SS.png";
import Mirai from "../images/MR.jpg";
import Sirakawa from "../images/SR.jpg";
import Marusim from "../images/MRU.jpg";
import BarCham from "../images/BAR.jpeg";
import Allaprima from "../images/alla.jpg";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import kakao from "../images/kakao.png";

function Home() {
  return (
    <div>
      <div className={styles.header}>

        <div className={styles.menu_main}>
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
        </div>
        <Link to="/Login">
          <img src={userIcon} className={styles.user} />
        </Link>
      </div>

      <div className={styles.content1}>
        <div className={styles.contentTXT}>
          당신의 여행을 기록해보세요 <br />
          Record Your Trip
        </div>
        <img src={exTimeBlock} className={styles.contentImg} />
      </div>

      <div className={styles.content2}>
        <div classclassName={styles.imgFrame1}>
          <img src={kyunghwa} className={styles.img1} />
          <div className={styles.imgName1}>진해 경화역</div>
        </div>
        <div classclassName={styles.imgFrame2}>
          <img src={busan} className={styles.img2} />
          <div className={styles.imgName2}>부산 광안리 </div>
        </div>
        <div classclassName={styles.imgFrame3}>
          <img src={dalaeng} className={styles.img3} />
          <div className={styles.imgName3}>다랭이마을</div>
        </div>
        <div classclassName={styles.imgFrame4}>
          <img src={kkotji} className={styles.img4} />
          <div className={styles.imgName4}>꽃지 해수욕장</div>
        </div>
        <div classclassName={styles.imgFrame5}>
          <img src={sungsan} className={styles.img5} />
          <div className={styles.imgName5}>성산일출봉</div>
        </div>
        <div className={styles.best_5}>국내베스트 5</div>
      </div>

      <div className={styles.content3}>
        <div className={styles.kakaoTXT1}>너의 여행을 공유해봐</div>
        <div className={styles.kakaoTXT2}>카카오톡으로 공유하기</div>
        <div className={styles.goClickBox}></div>
        <div className={styles.goTXT}>
          <Link to="/Login">GO &rarr;</Link>
        </div>
      </div>

      <div className={styles.content4}>
        <div className={styles.imgFrame6}>
          <img src={Mirai} className={styles.img6} />
          <div className={styles.imgName6}>미라이</div>
        </div>
        <div className={styles.imgFrame7}>
          <img src={Sirakawa} className={styles.img7} />
          <div className={styles.imgName7}>시라카와</div>
        </div>
        <div className={styles.imgFrame8}>
          <img src={BarCham} className={styles.img8} />
          <div className={styles.imgName8}>BAR CHAM</div>
        </div>
        <div className={styles.imgFrame9}>
          <img src={Marusim} className={styles.img9} />
          <div className={styles.imgName9}>마루심</div>
        </div>
        <div className={styles.imgFrame10}>
          <img src={Allaprima} className={styles.img10} />
          <div className={styles.imgName10}>알라프리마</div>
        </div>
        <div className={styles.restaurant_5}>서울 맛집 베스트 5</div>
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

export default Home;
