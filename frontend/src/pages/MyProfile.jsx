import { useRef, useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "James Lee",
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
  const inputRef = useRef(null);

  const focusRef = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input field
    }
  };

  const handleEditClick = () => {
    setIsEdit(true);
    focusRef();
  };

  return (
    <div className="gap-2 text-sm max-w-lg flex flex-col">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="font-medium bg-gray-50 text-3xl mt-4 max-w-60"
          type="text"
          value={userData.name}
          ref={inputRef}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium mt-4 text-3xl  text-neutral-800">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3 ">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-500">{userData.email}:</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              ref={inputRef}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Adress:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
                value={userData.address.line1}
                ref={inputRef}
              />
              <br />
              <input
                className="bg-gray-50"
                type="text"
                value={userData.address.line2}
                ref={inputRef}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3 ">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">BirthDay:</p>
          {isEdit ? (
            <input
              className="max-w-28 text-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all duration-100"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all duration-100"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
