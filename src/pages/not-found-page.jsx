import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <img style={{ width: "30%" }} src="/error.gif" alt="error" />
      <h1>Page Not Found</h1>
      <button className="btn btn__secondary">
        <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
}

export default NotFoundPage;
