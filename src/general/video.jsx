import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Bebas_Neue } from "next/font/google";
 
// const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
 
function Video() {

  // gsap.registerPlugin(ScrollTrigger);
 
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const triggerRef = useRef(null);
 
  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: triggerRef.current,
  //       scrub: true,
  //       start: "top center",
  //       end: "bottom top",
  //     },
  //   });
  //   tl.to(
  //     textRef.current,
  //     {
  //       translateY: -300,
  //     },
  //     0
  //   );
  //   tl.to(
  //     videoRef.current,
  //     {
  //       filter: "grayscale(80%)",
  //     },
  //     0
  //   );
  // }, []);
 
  return (
    <div ref={triggerRef} className="video-section">
      <video
        ref={videoRef}
        src="https://s3-figma-videos-production-sig.figma.com/video/1108664031665402882/TEAM/f125/0a8e/-cc26-4472-babf-14d69c5f4aac?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XL6fmMhUSxZ6q5VNl1m~LNn7zMFOaXSSrPnlytvENdmQiYeQqT867ZHAj5wWme6S27Ro88gzqjB0dwgzr2LZrxFcxd51yniJmVISy~FiS3YWM3tHaqmFoiUqQQdLEp~UQXA4~PMcNCnsIRslL6QstWfq63DSopOzthUhwHt3cmF8pv3FrDehaMDFyz8HSwKPw8xwWnOYdbYNv7W~tQG32Rd5t3fU7E815mDD-2xqP5EDfA~z-1fmiKMe1wishZCKz1CSBHlfGVAqu1APqCrEi4kcl6JppJJGaLfDlTK-2KtaKXbUxsamv8cpYOSCm2W9vSYK57VIJ7wI4DB0-pXBdg__"
        loop
        autoPlay
        muted
      ></video>
      <div className="video-copy">
        <h1 ref={textRef}
          // className={bebas.className}
        >
          Text video
        </h1>
      </div>
    </div>
  );
}
 
export default Video;
 