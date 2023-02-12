import Link from "next/link"
import { useState } from "react"
import { useEffect } from "react"
import { Tool } from "react-feather"
import servicesData from "../../../data/servicesData"

const TryOtherTools = () => {
  const [ShuffledServices, setShuffledServices] = useState([])
  function Shuffle(array) {
    let currentIndex = array.length,
      randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // And swap it with the current element.
      ;[array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex]
      ]
    }

    return array
  }
  useEffect(() => {
    const copy = [...servicesData]
    setShuffledServices(copy)
  }, [])
  return (
    <>
      <div className="col-xl-4 col-lg-4">
        <div className="news-sidebar pl-10">
          <div className="row">
            {/* <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title"> Search Here</h6>
                <div className="n-sidebar-search">
                  <input type="text" placeholder="Search your keyword..." />
                  <a href="#">
                    <i className="fal fa-search"></i>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="col-lg-12 col-md-12">
              <div className="widget">
                <h6 className="sidebar-title">Try Other Tools</h6>
                <div className="n-sidebar-feed">
                  <ul>
                    {Shuffle(ShuffledServices)
                      .slice(0, 5)
                      ?.map((service) => (
                        <li key={service?.url}>
                          <div className="feed-number">
                            <Link href={service?.url}>{service?.icon}</Link>
                          </div>
                          <div className="feed-content">
                            <span className="feed-date">
                              <i className="fal fa-calendar-alt"></i>{" "}
                              {service?.title}
                            </span>
                            <h6>
                              <Link href={service?.url}>
                                {service?.url}
                                {/* {service?.working?.length > 100
                                  ? `${service?.working}...`
                                  : service?.working} */}
                              </Link>
                            </h6>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TryOtherTools
