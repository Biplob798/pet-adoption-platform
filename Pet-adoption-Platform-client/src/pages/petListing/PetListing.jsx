import { Helmet } from "react-helmet-async";
import listingCover from "../../assets/act8.jpg";
import Cover from "../shared/cover/Cover";
import "react-tabs/style/react-tabs.css";
import useListing from "../../hooks/useListing";
import ListingTab from "../../components/listingTab/ListingTab";
import { useState } from "react";

const PetListing = () => {
  const [listing, refetch] = useListing();
  const [filterCategory, setFilterCategory] = useState(listing);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);

    if (selectedValue === "") {
      setFilterCategory(listing);
    } else {
      const filteringCategories = listing.filter(
        (category) =>
          category.category &&
          category.category.toLowerCase().includes(selectedValue.toLowerCase())
      );
      setFilterCategory(filteringCategories);
    }
    refetch()
  };

  console.log(filterCategory);

  return (
    <div>
      <Helmet>
        <title>Pet Adoption || Pet Listing</title>
      </Helmet>
      <Cover img={listingCover} title={"Pet Adoption"}></Cover>
      <div className="my-5 w-full flex justify-center gap-5">
        <div>
          <form>
            <input
              className="input input-bordered"
              type="text"
              placeholder="Search by category..."
              value={selectedCategory}
              onChange={handleSelectCategory}
            />
          </form>
        </div>
        <div>
          <form>
            <select
              className="input input-bordered w-full"
              onChange={handleSelectCategory}
              value={selectedCategory}
            >
              <option value="">Select All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Fish">Fish</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </form>
        </div>
      </div>
      <div>
        <ListingTab items={filterCategory}></ListingTab>
      </div>
    </div>
  );
};

export default PetListing;
