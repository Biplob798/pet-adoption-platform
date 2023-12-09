import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center mb-4">
          {" "}
          Welcome back! {user.displayName}{" "}
        </h2>
        <div className="card w-full bg-base-100  shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={user?.photoURL}
              alt={user.displayName}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name: {user.displayName}</h2>
            <p>Contact Email: {user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
