import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className="container mx-auto"
    >
      <SectionTitle title="Contact Us"></SectionTitle>
      <div className="flex flex-col md:flex-row gap-10 mt-7 p-10 bg-[#77bef8]">
        <div className="md:w-[500px] p-8 rounded-md bg-white">
          <h2 className="text-3xl font-poppins text-[#77bef8] mb-6">
            Get In Touch
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="w-full font-poppins px-5 py-3 rounded mt-2 placeholder:text-[#77bef8] bg-[#77bef8] bg-opacity-10"
              placeholder="Enter your name"
              {...register("name")}
            />
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="w-full font-poppins px-5 py-3 rounded mt-2 placeholder:text-[#77bef8] bg-[#77bef8] bg-opacity-20"
              placeholder="Enter your email"
              {...register("email")}
            />

            <textarea
              className="w-full px-5 py-3 rounded font-poppins mt-2 placeholder:text-[#77bef8] bg-[#77bef8] bg-opacity-30"
              rows="10"
              placeholder="Message here..."
            ></textarea>

            <input
              mt-2
              className="w-full bg-[#77bef8] text-white font-poppins px-5 py-3 rounded hover:bg-[#4caeff] cursor-pointer"
              type="submit"
            />
          </form>
        </div>

        <div className="md:w-2/3 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.74972536574!2d90.3746123761072!3d23.791924987179502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73458f06137%3A0x50dcc5d69e174edc!2sShewrapara%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1686278662642!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[400px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
