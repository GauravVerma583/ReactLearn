import "./Header.css";

function Header({ arrays }) {
  console.log(arrays);
  return (
    <>
      <h1>{arrays[0].name}</h1>;<h1>{arrays[0].roll}</h1>;
      <h1>{arrays[1].name}</h1>
    </>
  );
}
export default Header;
