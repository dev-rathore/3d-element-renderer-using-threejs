import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-center text-4xl text-slate-700 font-bold">
        Home Page
      </h1>
      <div className="grow flex flex-col justify-center items-center gap-4">
        <Link to={'/vehicles'} className="text-lg underline">Go To Vehicles Page</Link>
      </div>
    </div>
  );
}

export default HomePage;
