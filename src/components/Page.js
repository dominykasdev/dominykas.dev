import "./Page.scss";

const Page = ({ background, active = false, children }) => {
  const color = background !== undefined ? background : "transparent";
  return (
    <div
      className={`page${active ? " active" : ""}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Page;
