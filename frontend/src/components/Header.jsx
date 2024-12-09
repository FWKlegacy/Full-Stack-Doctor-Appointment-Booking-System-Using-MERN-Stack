import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 bg-primary md:px-10 lg:px-20">
      {/*....leftside*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img src={assets.group_profiles} alt="" />
          <p className="hidden sm:block">
            simply browse through the extensive list of our trusted doctors,
            <br />
            schedule your appointment hassle free
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center m-auto hover:scale-105 transition-all duration-300 gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm md:m-0"
        >
          Book Appointment{" "}
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/*....rightside*/}
      <div className="md:w-1/2 relative  ">
        <img
          className="w-full md:absolute bottom-0 rounded-lg h-auto"
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
