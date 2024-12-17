import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currency } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotsIndex] = useState(0);
  const [slotTime, setSlotsTime] = useState("");
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

  const getAvailableSlots = async () => {
    setDocSlots([]);
    //getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      // setting endtime of the date with
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(
          currDate.getHours() > 10 ? currDate.getHours() + 1 : 10
        );
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currDate < endTime) {
        let formattedTime = currDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //add slot to a row
        timeSlots.push({
          Datetime: new Date(currDate),
          time: formattedTime,
        });
        //increment time by 30mins
        currDate.setMinutes(currDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    docInfo && (
      <div>
        {/*.......doc details......*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 p-8 py-7 mx-2 bg-white sm:mx-0 mt-[-80px] rounded-lg sm:mt-0">
            <p className="flex items-center text-2xl font-medium gap-2 text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            {/*.......doc about*/}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img className="w-4" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm mt-1 max-w-[700px] text-gray-500">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 mt-4 font-medium">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currency}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/**....booking slots...? */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div>
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div key={index}>
                  <p>
                    {item[0] &&
                      item[0].datetime &&
                      daysOfWeek[item[0].datetime.getDay()]}
                  </p>
                  <p>
                    {item[0] && item[0].datetime && item[0].datetime.getDate()}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
