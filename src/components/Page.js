const Page = ({background, children}) => {
  const color = background !== undefined ? background : "#ccc";
  console.log(color);
  return <div className="page" style={{ backgroundColor: color }}>{children}</div>;
};

export default Page;
