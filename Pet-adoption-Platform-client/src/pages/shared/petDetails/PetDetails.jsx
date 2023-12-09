import { useParams } from "react-router-dom";
import useAllPets from "../../../hooks/useAllPets";
// import useAuth from "../../../hooks/useAuth";

const PetDetails = () => {
  // const {user} = useAuth()
  const [allPets] = useAllPets();
  const { id } = useParams();
  console.log(id);
  const singlePets = allPets.find((singlePet) => singlePet?._id === id);
  return (
    <>
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={singlePets?.image} alt={singlePets?.category} /></figure>
  <div className="card-body">
    <h2 className="card-title">{singlePets?.category} </h2>
    <p>{singlePets?.long}</p>
   {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>Adapt Now</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
  <form onSubmit={handleSubmit(onSubmit)}>
          {/* input filed  */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Pet name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Location name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Location name</span>
            </label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="Location name"
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-center items-center gap-6">
            {/* category  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">category</span>
              </label>
            </div>
            {/* age  */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Age</span>
              </label>
              <input
                {...register("age", { required: true })}
                type="number"
                placeholder="age "
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* pet details  */}
          <textarea
            {...register("short", { required: true })}
            className="textarea textarea-bordered"
            placeholder="short description"
          ></textarea>
          <textarea
            {...register("long", { required: true })}
            className="textarea textarea-bordered"
            placeholder="Long description"
          ></textarea>
          {/* file input  */}

          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
<input type="submit" value="Adapt"/>
          {/* <button {...register("recipe")} className="btn btn-primary mt-4">
            Add Pet <MdOutlinePets />
          </button> */}
        </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>
    </>
  );
};

export default PetDetails;
