import styles from "./Header.module.css";
interface HeaderProps {
  navigation: React.ReactNode;
  popover: React.ReactNode;
}

const Header = ({ navigation, popover }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerNavigation}>{navigation}</div>
          <div className={styles.headerPopover}>{popover}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
