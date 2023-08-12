import IAnnouncementProps from "../interfaces/IAnnouncementProps";

import Image from "next/image";

const Announcement: React.FC<IAnnouncementProps> = ({ announcement }) => {
  if (!announcement) {
    return;
  }

  const { imgUrl, title, description } = announcement;

  return (
    <section className="mb-20">
      <h2 className="visually-hidden">Announcement</h2>

      <div
        className={`fx-center flex-col-reverse ${
          description && "lg:flex-row-reverse"
        } gap-4 ${imgUrl ? "p-2" : "p-4"} content-block group`}
      >
        {(title || description) && (
          <div
            className={`flex-1 px-2 ${
              imgUrl && description ? "pb-6 lg:py-4" : "pb-0"
            }`}
          >
            {title && <h3 className="font-bold title-bahavior">{title}</h3>}
            {description && (
              <p className={`${title && "mt-4"} text-behavior`}>
                {description}
              </p>
            )}
          </div>
        )}

        {imgUrl && (
          <div
            className={`w-full h-full ${
              !description && "max-w-[400px] max-h-[400px]"
            } flex-1 rounded-xl overflow-hidden`}
          >
            <img src={imgUrl} alt="announcement" className="image-behavior" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Announcement;
