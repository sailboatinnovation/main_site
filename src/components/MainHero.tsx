import DividerWithText from "./DividerWithText";

function MainHero() {
  return <div>
    <div className="bg-[url(./assets/main-container.jpg)] bg-center bg-cover bg-no-repeat bg-fixed min-w-full h-250">
      <div className="h-full flex items-center justify-center text-black">
        <div className="p-4 w-100 h-80 bg-[rgba(255,255,255,0.8)] justify-center items-center flex flex-col">
          <div className="font-semibold text-2xl">Why work with me</div>
          <div className="f ont-medium text-xl my-8">Some text that goes here</div>
        </div>
      </div>
    </div>
    <DividerWithText title="KEY FOCUS AREAS" />
    <DividerWithText title="WHO I WORK WITH" />
    <DividerWithText title="CLIENT TESTIMONIALS" />
    <DividerWithText title="FINAL CALL TO ACTION" />
    <DividerWithText title="NEWS LETTER SIGNUP" />
  </div>
}

export default MainHero;