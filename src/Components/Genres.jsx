import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css';

const Genres = () => {
  return (
    <>
      <div className="row">
        <div class="col-lg-12 mb-5">
          <div class="card-header  mb-3">
            <div class="header-title">
              <h4 class="card-title text-capitalize">top genres for you</h4>
            </div>
            <div class="common-album position-relative d-lg-block d-none">
              <div class="swiper-button-prev" id="prev1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M15.75 9.5C15.75 9.64918 15.6908 9.79226 15.5853 9.89775C15.4798 10.0032 15.3367 10.0625 15.1875 10.0625H4.17025L8.27298 14.1645C8.32525 14.2168 8.3667 14.2788 8.39499 14.3471C8.42327 14.4154 8.43783 14.4886 8.43783 14.5625C8.43783 14.6364 8.42327 14.7096 8.39499 14.7779C8.3667 14.8462 8.32525 14.9082 8.27298 14.9605C8.22072 15.0127 8.15868 15.0542 8.09039 15.0825C8.02211 15.1108 7.94893 15.1253 7.87502 15.1253C7.80111 15.1253 7.72792 15.1108 7.65964 15.0825C7.59135 15.0542 7.52931 15.0127 7.47705 14.9605L2.41455 9.89797C2.36225 9.84573 2.32076 9.78369 2.29245 9.7154C2.26414 9.64712 2.24957 9.57392 2.24957 9.5C2.24957 9.42608 2.26414 9.35288 2.29245 9.2846C2.32076 9.21631 2.36225 9.15427 2.41455 9.10203L7.47705 4.03953C7.58259 3.93398 7.72575 3.87469 7.87502 3.87469C8.02428 3.87469 8.16744 3.93398 8.27298 4.03953C8.37853 4.14508 8.43783 4.28823 8.43783 4.4375C8.43783 4.58677 8.37853 4.72992 8.27298 4.83547L4.17025 8.9375H15.1875C15.3367 8.9375 15.4798 8.99676 15.5853 9.10225C15.6908 9.20774 15.75 9.35082 15.75 9.5Z"
                    fill="#4A525F"
                  />
                </svg>
              </div>
              <div class="swiper-button-next" id="next1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M15.5855 9.89797L10.523 14.9605C10.4174 15.066 10.2743 15.1253 10.125 15.1253C9.97573 15.1253 9.83258 15.066 9.72703 14.9605C9.62148 14.8549 9.56219 14.7118 9.56219 14.5625C9.56219 14.4132 9.62148 14.2701 9.72703 14.1645L13.8298 10.0625H2.8125C2.66332 10.0625 2.52024 10.0032 2.41475 9.89775C2.30926 9.79226 2.25 9.64918 2.25 9.5C2.25 9.35082 2.30926 9.20774 2.41475 9.10225C2.52024 8.99676 2.66332 8.9375 2.8125 8.9375H13.8298L9.72703 4.83547C9.62148 4.72992 9.56219 4.58677 9.56219 4.4375C9.56219 4.28823 9.62148 4.14508 9.72703 4.03953C9.83258 3.93398 9.97573 3.87469 10.125 3.87469C10.2743 3.87469 10.4174 3.93398 10.523 4.03953L15.5855 9.10203C15.6378 9.15427 15.6793 9.21631 15.7076 9.2846C15.7359 9.35288 15.7504 9.42608 15.7504 9.5C15.7504 9.57392 15.7359 9.64712 15.7076 9.7154C15.6793 9.78369 15.6378 9.84573 15.5855 9.89797Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
           spaceBetween={50}
           slidesPerView={4}
           navigation
           onSlideChange={() => console.log('slide change')}
           onSwiper={(swiper) => console.log(swiper)} class="swiper overflow-hidden" data-swiper="geners-slider">
            <ul class="swiper-wrapper   p-0 list-unstyled mb-0 ">
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/17.png"
                  id="23"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  sorrow
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/18.png"
                  id="24"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  relax
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/19.png"
                  id="25"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  travel
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/20.png"
                  id="26"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  party
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/21.png"
                  id="27"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  19’s retro song
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
              <SwiperSlide class="swiper-slide mb-3">
                <img
                  src="../assets/images/dashboard/18.png"
                  id="29"
                  class="mb-3 img-fluid rounded-3"
                  alt="song-img"
                />
                <a
                  href="music-player.html"
                  class=" text-capitalize line-count-1 h5 d-block"
                >
                  relax
                </a>
                <small class="fw-normal text-capitalize line-count-1">
                  top 12 songs from travels and
                </small>
              </SwiperSlide>
            </ul>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Genres;
