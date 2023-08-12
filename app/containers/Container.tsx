import IContainerProps from "../interfaces/IContainerProps";

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-8 md:grid-rows-1 md:grid-cols-8">
      <div className="row-start-1 md:col-span-1 relative"></div>

      <div className="row-span-6 md:row-start-1 col-span-2 md:col-span-6 px-4 py-20">
        {children}
      </div>

      <div className="row-start-1 col-start-1 md:col-span-1 relative"></div>
    </div>
  );
};

export default Container;
