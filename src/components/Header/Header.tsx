import styles from "./Header.module.css";

interface HeaderProps {
  navigation: React.ReactNode;
}

const Header = ({ navigation }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerNavigation}>{navigation}</div>
      </div>
    </header>
  );
};

export default Header;
