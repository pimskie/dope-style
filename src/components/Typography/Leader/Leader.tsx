import styles from "./Leader.module.css";

interface Props {
  children: React.ReactNode;
}

const Leader = ({ children }: Props) => {
  return <p className={styles.leader}>{children}</p>;
};

export default Leader;
