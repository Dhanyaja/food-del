import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext);

  return (
    <div className="mt-[30px]" id="food-display">
      <h2 className="text-2xl font-medium">Top dishes near you</h2>
      <div className="grid grid-cols-4 mt-[30px] gap-[30px] gap-y-[50px]">
        {food_list.map((item, index) => {

          if(category==="All" || category === item.category){
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
                category={item.category}
              />
            );
          }

        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
