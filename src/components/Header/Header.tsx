import LanguageSwitcher from "../LanguageSwitch/LanguageSwitch";
import styles from "./Header.module.css";

import Logo from "@/components/Logo/Logo";
interface HeaderProps {
  navigation: React.ReactNode;
  popover: React.ReactNode;
}

const Header = ({ navigation, popover }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Logo />
          <div className={styles.headerNavigation}>
            <div className={styles.headerNavigation}>{navigation}</div>
            <div className={styles.headerPopover}>{popover}</div>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
