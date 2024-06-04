// // components/ImageSlider.js
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// SwiperCore.use([Navigation, Pagination, Autoplay]);

// const ImageSlider = () => {
//   const slides = [
//     // {
//     //   image: "/path/to/image1.jpg", // Replace with your image path
//     //   title: "Web Elegance Engineering",
//     //   description:
//     //     "OUR VISION FOR WEB ELEGANCE ENGINEERING At Pathivara Innovations Pvt Ltd, our vision is to be at the forefront of technological",
//     //   category: "Production",
//     // },
//      {
//     image: AI,
//     title: "AI",
//     description:
//       "Our Vision for Artificial Intelligence At Pathivara Innovations Pvt Ltd, our vision is to be at the forefront of technological innovation,",
//   },
//   {
//     image: Training,
//     title: "Training",
//     description:
//       "OUR VISION FOR TRAINING At Pathivara Innovations Pvt Ltd, our vision is to be at the forefront of technological innovation, driving",
//   },
//     // Add more slides as needed
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{ delay: 5000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         navigation={true}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
//                 <div className="text-white uppercase mb-4">
//                  Production
//                 </div>
//                 <h2 className="text-orange-500 text-4xl font-bold mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-white mb-4">{slide.description}</p>
//                 <button className="bg-transparent text-white border border-white py-2 px-4 mt-4">
//                   View Case
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default ImageSlider;
