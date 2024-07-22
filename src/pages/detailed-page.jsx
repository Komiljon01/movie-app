import { useParams } from "react-router-dom";

function DetailedPage() {
  const { movieID } = useParams();

  console.log(movieID);

  return <div>{movieID}</div>;
}

export default DetailedPage;
