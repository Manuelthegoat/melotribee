import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside
        class="sidebar sidebar-base sidebar-white sidebar-default  "
        id="first-tour"
        data-toggle="main-sidebar"
        data-sidebar="responsive"
      >
        <div class="sidebar-header d-flex align-items-center justify-content-center">
          <a href="index.html" class="navbar-brand">
            <div class="logo-main">
              <img
                src="./assets/images/m2.png"
                class="logo-normal img-fluid"
                alt="logo"
              />
              <img
                src="./assets/images/m2.png"
                class="logo-normal dark-normal img-fluid"
                alt="logo-dark"
              />
              <img
                src="./assets/images/m2.png"
                class="logo-normal white-normal img-fluid"
                alt="logo-color"
              />
              <img
                src="./assets/images/m1.png"
                class="logo-mini img-fluid"
                alt="logo-mini"
              />
              <img
                src="./assets/images/m1.png"
                class="logo-mini dark-mini img-fluid"
                alt="logo-dark-mini"
              />
              <img
                src="./assets/images/m1.png"
                class="logo-mini white-mini img-fluid"
                alt="logo-white-mini"
              />
            </div>
          </a>
          <div class="sidebar-toggle" data-toggle="sidebar" data-active="true">
            <i class="icon">
              <svg
                class="icon-10"
                width="10"
                height="10"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29853 8C7.11974 8 6.94002 7.93083 6.80335 7.79248L3.53927 4.50446C3.40728 4.37085 3.33333 4.18987 3.33333 4.00036C3.33333 3.81179 3.40728 3.63081 3.53927 3.4972L6.80335 0.207279C7.07762 -0.069408 7.52132 -0.069408 7.79558 0.209174C8.06892 0.487756 8.06798 0.937847 7.79371 1.21453L5.02949 4.00036L7.79371 6.78618C8.06798 7.06286 8.06892 7.51201 7.79558 7.79059C7.65892 7.93083 7.47826 8 7.29853 8Z"
                  fill="white"
                />
                <path
                  d="M3.96552 8C3.78673 8 3.60701 7.93083 3.47034 7.79248L0.206261 4.50446C0.0742745 4.37085 0.000325203 4.18987 0.000325203 4.00036C0.000325203 3.81179 0.0742745 3.63081 0.206261 3.4972L3.47034 0.207279C3.74461 -0.069408 4.18831 -0.069408 4.46258 0.209174C4.73591 0.487756 4.73497 0.937847 4.4607 1.21453L1.69649 4.00036L4.4607 6.78618C4.73497 7.06286 4.73591 7.51201 4.46258 7.79059C4.32591 7.93083 4.14525 8 3.96552 8Z"
                  fill="white"
                />
              </svg>
            </i>
          </div>
        </div>
        <div class="sidebar-body pt-0 data-scrollbar">
          <div class="sidebar-list">
            <ul class="navbar-nav iq-main-menu" id="sidebar-menu">
              <li class="nav-item static-item mt-5">
                <a
                  class="nav-link static-item disabled text-start"
                  href="index.html#"
                  tabindex="-1"
                >
                  <span class="custom-icon default-icon text-uppercase">
                    Main
                  </span>
                  <span
                    class="mini-icon"
                    data-bs-toggle="tooltip"
                    title="Home"
                    data-bs-placement="right"
                  >
                    -
                  </span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="collapse"
                  href="index.html#home-menu"
                  role="button"
                  aria-expanded="false"
                  aria-controls="home-menu"
                >
                  <i
                    class="icon"
                    data-bs-toggle="tooltip"
                    title="Dashboard"
                    data-bs-placement="right"
                  >
                    <svg
                      class="icon-20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_389_2893)">
                        <path
                          d="M16.875 16.875V9.02655C16.875 8.93945 16.8568 8.85332 16.8215 8.77367C16.7863 8.69403 16.7348 8.62263 16.6703 8.56405L10.4203 2.66249C10.3052 2.55774 10.1552 2.49969 9.99961 2.49969C9.844 2.49969 9.69399 2.55774 9.57891 2.66249L3.32891 8.56405C3.26459 8.6227 3.21323 8.69413 3.17811 8.77377C3.143 8.85341 3.12491 8.93951 3.125 9.02655V16.875"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.25 16.875H18.75"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.875 16.875V12.5C11.875 12.3342 11.8092 12.1753 11.6919 12.0581C11.5747 11.9408 11.4158 11.875 11.25 11.875H8.75C8.58424 11.875 8.42527 11.9408 8.30806 12.0581C8.19085 12.1753 8.125 12.3342 8.125 12.5V16.875"
                          stroke="currentColor"
                          stroke-width="1.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_389_2893">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </i>
                  <span class="item-name">Home</span>
                  <i class="right-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      class="icon-18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </i>
                </a>
                <ul
                  class="sub-nav collapse"
                  id="home-menu"
                  data-bs-parent="#sidebar-menu"
                >
                  <li class="nav-item">
                    <a class="nav-link active" href="index.html">
                      <i class="icon">
                        <svg
                          class="icon-10"
                          width="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </g>
                        </svg>
                      </i>
                      <i
                        class="sidenav-mini-icon"
                        data-bs-toggle="tooltip"
                        title="Dashboard"
                        data-bs-placement="right"
                      >
                        {" "}
                        H
                      </i>
                      <span class="item-name"> Dashboard </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="release.html">
                      <i class="icon svg-icon">
                        <svg
                          class="icon-10"
                          width="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </g>
                        </svg>
                      </i>
                      <i
                        class="sidenav-mini-icon"
                        data-bs-toggle="tooltip"
                        title="Release"
                        data-bs-placement="right"
                      >
                        {" "}
                        R
                      </i>
                      <span class="item-name">Release</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="albums.html">
                      <i class="icon">
                        <svg
                          class="icon-10"
                          width="10"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <circle
                              cx="12"
                              cy="12"
                              r="8"
                              fill="currentColor"
                            ></circle>
                          </g>
                        </svg>
                      </i>
                      <i
                        class="sidenav-mini-icon"
                        data-bs-toggle="tooltip"
                        title="Albums"
                        data-bs-placement="right"
                      >
                        {" "}
                        A
                      </i>
                      <span class="item-name">Albums</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="sidebar-footer"></div>
      </aside>
    </>
  );
};

export default Sidebar;
