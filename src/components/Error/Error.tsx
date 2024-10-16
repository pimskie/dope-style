import "./error.styles.css";

interface Props {
  error?: string;
  children?: React.ReactNode;
}

const Error = ({ error = "", children }: Props) => {
  return (
    <div className="error">
      <div>{error}</div>
      {children}
    </div>
  );
};

export default Error;
