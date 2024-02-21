
type ThreeDotsLoadingAnimationType = {
    color: string;
  }
  
function ThreeDotsLoadingAnimation({ color } : { color: string} ) {
      return (
        <div className="flex items-center justify-center space-x-2 ">
          <div className={`bg-${ color }  w-[1rem] h-[1rem] rounded-full animate-bounce blue-circle animation-delay-[0ms]`}></div>
          <div className={`bg-${ color }  w-[1rem] h-[1rem] rounded-full animate-bounce blue-circle animation-delay-[0ms]`}></div>
          <div className={`bg-${ color }  w-[1rem] h-[1rem] rounded-full animate-bounce blue-circle animation-delay-[0ms]`}></div>
          {/* <div className="bg-easeBlue w-[1rem] h-[1rem] rounded-full animate-bounce green-circle animation-delay-[200ms]"></div>
          <div className="bg-easeBlue w-[1rem] h-[1rem] rounded-full animate-bounce red-circle animation-delay-[400ms]"></div> */}
        </div>
      );
}
    
export default ThreeDotsLoadingAnimation;