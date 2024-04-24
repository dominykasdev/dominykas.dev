import "./Page.scss";

const Page = ({ id, background, active = false, children }) => {
  const color = background !== undefined ? background : "transparent";
  return (
    <div
      id={id}
      className={`page${active ? " active" : ""}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};

export default Page;
