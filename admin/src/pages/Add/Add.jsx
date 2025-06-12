import React, { useState } from "react";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

const Add = ({url}) => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if(response.data.success){
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      })
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className="w-[70%] ml-[5vw] mt-[50px] text-[#6d6d6d] text-[16px]">
      <form className="form gap-[10px]" onSubmit={onSubmitHandler}>
        <div className="w-[120px] form">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            id="image"
            required
          />
        </div>
        <div className="w-[40%] form">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            className="border p-3 rounded-md"
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>
        <div className="w-[40%] form">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            placeholder="Write content here"
            className="border p-3 rounded-md"
            required
          ></textarea>
        </div>
        <div className="flex gap-[30px]">
          <div className="add-category form">
            <p>Product category</p>
            <select
              name="category"
              className="border p-3 rounded-md"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price form">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
              className="border p-3 rounded-md"
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-button bg-black text-white cursor-pointer mt-[20px] p-3 rounded-md max-w-[120px]"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
