// import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
// import usePets from "../../hooks/usePets";

const ListingCard = ({ item }) => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  // const locations = useLocation();
  // const axiosSecure = useAxiosSecure();
  // const [, refetch] = usePets();
  const { _id, category, image, short, age, long } = item;
  // const handleAddToListing = (listing) => {
  //   console.log(listing, user.email);

  //   if (user && user?.email) {
  //     // todo
  //     const petItem = {
  //       menuId: _id,
  //       email: user.email,
  //       name,
  //       category,
  //       image,
  //       age,
  //       location,
  //       short,
  //       long,
  //     };
  //     axiosSecure.post("/pets", petItem).then((res) => {
  //       console.log(res.data);
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "please login to add the pet",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/login", { state: { from: locations } });
  //       }
  //     });
  //     refetch();
  //   }
  // };

  // // submit button
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = form.target;

  //   const number = form.number.value;
  //   const address = form.address.value;

  //   if (user && user?.email) {
  //     // todo
  //     const adoptItem = {
  //       email: user?.email,
  //       displayName: user?.displayName,
  //       name,
  //       address,
  //       number,
  //     };
  //     axiosSecure.post("/adopts", adoptItem).then((res) => {
  //       console.log(res.data);
  //     });
  //   } else {
  //     Swal.fire({
  //       title: "please login to add the pet",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate("/login", { state: { from: locations } });
  //       }
  //     });
  //     refetch();
  //   }
  // };
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div>
          <div className="mb-8">
            <img
              src={image}
              alt=""
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <p className="text-gray-700">{short}</p>
            <p className="text-gray-700">{long}</p>
            <p>#Age-{age}</p>
          </div>
          <Link to={`/petDetails/${_id}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-500 mb-4 border-blue-300 w-full">
              View Details
            </button>
          </Link>
          <div className="card-actions justify-end items-center">
            {/* The button to open modal */}
            <a
              href="#my_modal_8"
              className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400 w-full"
            >
              Adopt Button
            </a>
            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
              <div className="modal-box">
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Name</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      placeholder="Pet Name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">User Email</span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      placeholder="User Email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Phone Number"
                      name="number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Address</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="modal-action">
                    <a href="#" className="btn w-full ">
                      <input
                        // onSubmit={handleSubmit}
                        className="btn btn-primary"
                        type="submit"
                        value="submit"
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ListingCard;
