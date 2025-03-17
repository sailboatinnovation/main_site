function MainHero() {
  return <>
    <div className="bg-[url(./assets/main-container.jpg)] bg-center bg-cover bg-no-repeat bg-fixed min-w-full h-full">
      <div className="h-full flex items-center justify-center text-black">
        <div className="m-8 p-4 h-50 bg-[rgba(255,255,255,0.8)] justify-center items-center flex flex-col">
          <div className="font-mono font-semibold text-2xl">Some text that goes here</div>
          <div className="font-mono font-medium text-xl my-8">Some text that goes here</div>
        </div>
    </div>
  </div>
  </>
}

export default MainHero;