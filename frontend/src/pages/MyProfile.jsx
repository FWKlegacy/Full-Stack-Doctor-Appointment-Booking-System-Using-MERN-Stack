import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Brevian",
    image: assets.profile_pic,
    email: "wanjalawafula@gmail.com",
    phone: "+254 741164812",
    address: {
      line1: "56th cross,Virginia",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-06-12",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
    </div>
  );
};

export default MyProfile;
