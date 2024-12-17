import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center pt-10 text-2xl text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center text-sm md:w-2/4 text-gray-600 gap-6">
          <b className="text-gray-800">Our Vision</b>
          <p>
            An internationally recognized centre committed to scholarly and
            professional excellence in healthcare
          </p>
          <b className="text-gray-800">Core Values</b>
          <p>
            To realize the stated vision and mission, the Faculty aspires to
            nurture values that are vital to its mandate. The Faculty is thus
            guided by the right values derived from moral standards required of
            healthcare professionals,
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To provide quality medical education and training through creation,
            preservation, integration, transmission and utilization of health
            knowledge{" "}
          </p>
        </div>
      </div>
      <div className="my-4 text-xl">
        <p>
          WHY <span className="font-semibold text-gray-700">CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestlye
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Confinience:</b>
          <p>Access to a network of healthcare professionals in your area</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Perssonalizaton:</b>
          <p>
            Tailored recommendations and reminders to help you stay on to of
            your health
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
