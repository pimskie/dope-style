import styles from "./Heading.module.css";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface Props {
  Tag?: HeadingTag;
  children?: React.ReactNode;
}

const Heading = ({ Tag = "h1", children }: Props) => {
  return <Tag className={styles.heading}>{children}</Tag>;
};

export default Heading;
