import Link from "next/link"
import useGlobalContext from "../../hooks/useGlobalContext"
import dynamic from "next/dynamic"
import { useState } from "react"
import Lightbox from "react-image-lightbox"
import Image from "next/image"
const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false
})

const Sidebar = ({ headerMenu }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext()
  const [photoIndex, setPhotoIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const galleryImages = [
    {
      id: 1,
      img: "/assets/img/project/sm/project-7.jpg"
    },
    {
      id: 2,
      img: "/assets/img/project/sm/project-8.jpg"
    },
    {
      id: 3,
      img: "/assets/img/project/sm/project-9.jpg"
    },
    {
      id: 4,
      img: "/assets/img/project/sm/project-10.jpg"
    },
    {
      id: 5,
      img: "/assets/img/project/sm/project-13.jpg"
    },
    {
      id: 6,
      img: "/assets/img/project/sm/project-12.jpg"
    }
  ]
  const lightBoxImages = galleryImages.map((img) => img.img)
  const images = lightBoxImages

  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40">
              <a href="/">
                <Image
                  src="/assets/img/logo/brainsees.png"
                  alt="logo"
                  width={50}
                  height={50}

                />
              </a>
            </div>
            <div className="mobile-menu fix">
              <nav
                id="mobile-menu"
                className={`${headerMenu ? "d-block" : "d-lg-none"}`}
              >
                <ul>
                  {/* <Collapsible
                    trigger={<a>Home</a>}
                    triggerTagName="div"
                    triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd"
                    open={false}
                  >
                    <ul
                      onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black"
                    >
                      <li>
                        <Link href="/">Home Designer</Link>
                      </li>
                      <li>
                        <Link href="/home-two">Home Agency</Link>
                      </li>
                      <li>
                        <Link href="/home-three">Home Freelancer</Link>
                      </li>
                      <li>
                        <Link href="/home-four">Home Corporate</Link>
                      </li>
                      <li>
                        <Link href="/home-five">Home Studio</Link>
                      </li>
                      <li>
                        <Link href="/home-six">Home Creative</Link>
                      </li>
                      <li>
                        <Link href="/home-seven">Home Minimal</Link>
                      </li>
                      <li>
                        <Link href="/home-eight">Home Minimal Full</Link>
                      </li>
                      <li>
                        <Link href="/home-nine">Home Photographer</Link>
                      </li>
                      <li>
                        <Link href="/home-ten">Home Photographer 2</Link>
                      </li>
                      <li>
                        <Link href="/home-eleven">Home Photographer 3</Link>
                      </li>
                      <li>
                        <Link href="/home-twelve">Home Photographer 4</Link>
                      </li>
                      <li>
                        <Link href="/home-thirteen">Home Politician</Link>
                      </li>
                    </ul>
                  </Collapsible> */}
                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                  </div>
                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/courses">
                        <a>Courses</a>
                      </Link>
                    </li>
                  </div>
                  {/* <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/shop">
                        <a>Shop</a>
                      </Link>
                    </li>
                  </div> */}
                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/team">
                        <a>Team</a>
                      </Link>
                    </li>
                  </div>
                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/services">
                        <a>Services</a>
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Social Info</h4>
            </div>
            <div className="sidebar__social">
              <ul>
                <li>
                  <a href="https://web.facebook.com/brainsees" target="__blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Brainsees" target="__blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCwV6luAPJBCXEmI-76jPAAQ" target="__blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/brain-sees-828a5b2aa/" target="__blank">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}
      ></div>
      {/* <!-- sidebar area end -->  */}
    </>
  )
}

export default Sidebar
