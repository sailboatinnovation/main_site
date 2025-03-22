type Props = {
  title: string
}
function DividerWithText(props: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full my-4">
      <hr className="w-full sm:flex-grow border-t-4 border-teal-700 mb-2 sm:mb-0 sm:mr-4" />
      <span className="whitespace-nowrap text-lg font-mono font-semibold text-2xl text-[#DAA520] mx-16">{props.title}</span>
      <hr className="w-full sm:flex-grow border-t-4 border-[#002A5E] mt-2 sm:mt-0 sm:ml-4 " />
    </div>
  );
};

export default DividerWithText;
