import "./Page.scss";

const Page = ({ background, children }) => {
  const color = background !== undefined ? background : "transparent";
  return (
    <div className="page" style={{ backgroundColor: color }}>
      {children}
    </div>
  );
};

export default Page;
