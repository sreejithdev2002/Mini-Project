 ;
import "./WelcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="flex flex-col justify-center mt-50 lg:mt-20 items-center">
        <h1 className="text-2xl tracking-wide lg:text-4xl">
          Welcome to <span id="shoooz">SHOOOZ</span>
        </h1>
        <h3 className="text-[10px] mt-[5px] tracking-[5px] font-mono lg:text-sm">YOUR FOOTWEAR DESTINATION</h3>
      </div>
    </>
  );
}

export default WelcomePage;
