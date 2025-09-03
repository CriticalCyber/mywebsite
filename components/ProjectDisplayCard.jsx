import { useNavigate } from "react-router-dom";

const ProjectDisplayCard = ({ title, imgSrc, id, type }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex flex-col items-center justify-center w-full h-[356px] max-h-[356px] gap-3 overflow-hidden cursor-pointer"
      title={`${title} Case Study`}
    >
      {/* Image */}
      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-base-100">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={`${title} image`}
          title={title}
        />
      </div>

      {/* Overlay - always visible on mobile, hover on desktop */}
      <div
        className="absolute bottom-0 border-4 border-base-100 right-0 w-full h-full p-1 flex items-center backdrop-blur-md z-10 rounded-2xl transition-all ease-in-out duration-300
        opacity-100 md:opacity-0 md:group-hover:opacity-100"
      ></div>

      {/* Title - always visible on mobile, hover on desktop */}
      <div
        className="group absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-base-100 border-4 border-base-100 
        w-fit flex flex-wrap items-center justify-center gap-3 py-1 px-3 z-20 transition-all ease-in-out duration-300
        opacity-100 md:opacity-0 md:group-hover:opacity-100
        -translate-x-0 -translate-y-0 md:-translate-x-full md:-translate-y-full md:group-hover:translate-x-0 md:group-hover:translate-y-0"
      >
        <h1 className="text-[12px] font-bold leading-relaxed tracking-wide">
          {title}
        </h1>
      </div>

      {/* Button - always visible on mobile, hover on desktop */}
      <button
        onClick={() => navigate(`/work/read/${type}/${id}`)}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 btn btn-sm btn-neutral z-30 transition-all ease-in-out duration-300
        opacity-100 md:opacity-0 md:group-hover:opacity-100"
        title={`${title} Case Study`}
      >
        Read
      </button>
    </div>
  );
};

export default ProjectDisplayCard;
