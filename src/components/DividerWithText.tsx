type Props = {
  title: string
}
function DividerWithText(props: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full my-4">
      <hr className="w-full sm:flex-grow border-t-4 border-[#daa520] mb-2 sm:mb-0 sm:mr-4" />
      <h6 className="whitespace-nowrap font-mono font-semibold text-2xl text-black mx-16">{props.title}</h6>
      <hr className="w-full sm:flex-grow border-t-4 border-[#daa520] mt-2 sm:mt-0 sm:ml-4 " />
    </div>
  );
};

export default DividerWithText;
