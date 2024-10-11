import "./error.styles.css";

interface Props {
  error: string;
}

const Error = ({ error }: Props) => {
  return <div className="error">{error}</div>;
};

export default Error;
