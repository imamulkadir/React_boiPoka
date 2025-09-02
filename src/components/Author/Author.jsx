import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Author = () => {
  return (
    <div className="bg-base-100 my-10 flex min-h-[calc(100vh-200px)] items-center justify-center rounded-2xl px-4 sm:min-h-[calc(100vh-90px)] lg:max-h-[70vh] lg:min-h-[calc(100vh-100px)]">
      <div className="w-full max-w-sm rounded-2xl p-6 text-center sm:max-w-md sm:p-8 md:p-10 lg:max-w-lg lg:p-12">
        {/* Name */}
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">
          Imamul Kadir
        </h1>
        {/* Role */}
        <p className="text-md mb-4 break-words text-gray-600 sm:text-lg md:text-xl">
          Software Engineer
        </p>
        {/* Links */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-xl sm:flex-row sm:gap-6">
          <a
            href="mailto:imamulkadiroyan@gmail.com"
            className="break-words text-[#5754E8] transition-colors duration-300 hover:scale-110 hover:text-white"
          >
            <MdOutlineAlternateEmail />
          </a>
          <a
            href="https://github.com/imamulkadir"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words text-[#5754E8] transition-colors duration-300 hover:scale-110 hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://imamulkadir.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words text-[#5754E8] transition-colors duration-300 hover:scale-110 hover:text-white"
          >
            <TbWorldWww />
          </a>
          <a
            href="https://linkedin.com/in/imamulkadir"
            target="_blank"
            rel="noopener noreferrer"
            className="break-words text-[#5754E8] transition-colors duration-300 hover:scale-110 hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Author;
