import { useNavigate } from "react-router";

function HomeButton() {
  const navigation = useNavigate();
  return <button onClick={() => navigation("/")}>Home</button>;
}

export default HomeButton;
