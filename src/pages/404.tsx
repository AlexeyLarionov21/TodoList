import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container">
      <h1>NOT FOUND</h1>
      <Link to="/">Home</Link>
    </div>
  );
};
