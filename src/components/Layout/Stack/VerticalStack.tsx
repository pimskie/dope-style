import "./VerticalStack.styles.css";

const VerticalStack = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="stack-vertical">{children}</div>;
};

export default VerticalStack;
