import { Link } from "react-router-dom";

function Home() {
    document.title = "Home";
  return (
    <>
      <h1>Welcome to the Home Page!</h1>
      <Link to="/albums">View all albums</Link>
    </>
  );
}

export default Home;
