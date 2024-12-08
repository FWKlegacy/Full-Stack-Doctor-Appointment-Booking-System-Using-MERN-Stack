import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg px-6 bg-primary md:px-10 lg:px-20">
      {/*....leftside*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p>
          Book Appointment <br />
          With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            simply browse through the extensive list of our trusted doctors,
            <br />
            schedule your appointment hassle free
          </p>
        </div>
        <a href="">
          Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/*....rightside*/}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  );
};

export default Header;
