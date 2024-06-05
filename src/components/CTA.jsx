const CTA = () => {
  return (
    <div className="mx-12 sm:mx-16 lg:mx-60 bg-mainBlue flex rounded p-10 sm:p-20 mb-10 gap-10 shadow-sm justify-between sm:flex-row flex-col">
      <h1 className="text-2xl ss:text-3xl sm:text-4xl font-serif text-tertiary">
        It’s <span className="text-highlight">your</span> business. <br /> We’re
        here to help it grow.
      </h1>
      <div className="flex items-center">
        <button className="text-xs bg-highlight hover:bg-tertiaryhighlight text-white font-semibold rounded py-4 px-10">
          START FREE
        </button>
      </div>
    </div>
  );
};
export default CTA;
