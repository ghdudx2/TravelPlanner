function LoginHeader() {
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
            <Link to="/Mypage">My Page</Link>
          </div>
        </div>
        <Link to="/Login">
          <img src={userIcon} className={styles.user} />
        </Link>
      </div>
    </div>
  );
}
