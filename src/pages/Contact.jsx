import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Contact = () => {
  const InputStyle =
    "border-red-700 border-solid border-2 rounded-md w-[200px] h-10 p-2 bg-black focus:outline-none";
  const TextAreaStyle =
    "border-red-700 border-solid border-2 rounded-md w-full h-[120px] p-2 bg-black resize-none focus:outline-none";

  return (
    <main className="Contact h-screen w-full bg-black flex justify-center items-center text-white">
      <div className=" flex justify-center p-10 gap-10 max-w-4xl w-full">
        
        {/* Left side */}
        <div className="flex flex-col justify-center gap-8 w-1/2">
          <div>
            <h1 className="text-red-700 font-bold font-dancing text-6xl mb-3">
              Get in Touch
            </h1>
            <p className="text-[18px] text-gray-300">
              We&apos;d love to hear from you.
            </p>
          </div>
          <p className="max-w-[300px] text-gray-400">
            Whether you have questions, feedback, or just want to say hello,
            feel free to reach out.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center">
              <Mail size={18} />
              <span className="text-sm ml-2">hello@coffeehouse.com</span>
            </div>
            <nav className="flex gap-4 mt-2">
              <a href="#" className="hover:text-red-700">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-700">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-700">
                <Twitter size={24} />
              </a>
            </nav>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2">
          <form className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <label htmlFor="FirstName" className="text-sm mb-1">
                  First Name
                </label>
                <input id="FirstName" type="text" className={InputStyle} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="LastName" className="text-sm mb-1">
                  Last Name
                </label>
                <input id="LastName" type="text" className={InputStyle} />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="Email" className="text-sm mb-1">
                Email
              </label>
              <input id="Email" type="email" className={InputStyle} />
            </div>

            <div className="flex flex-col">
              <label htmlFor="Message" className="text-sm mb-1">
                Message
              </label>
              <textarea id="Message" className={TextAreaStyle}></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-700 text-[1rem] px-6 py-2 rounded-md shadow-md hover:bg-red-800 transition duration-200 w-fit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
