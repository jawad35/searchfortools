import React from "react"
import Link from "next/link"
const ServiceWrapper = ({ servicesData, title }) => {
  return (
    <>
      <h5 className="services-sm-title mb-25">{title} Tools</h5>
      {servicesData?.map((item) => {
        return (
          <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="tpservices tpservices-3 text-center mb-30">
              <div className="tpservices__icon mb-30">
                {/* <i className={`${item.icon}`}></i> */}
                {item?.icon}
              </div>
              <div className="tpservice__content">
                <h4 className="tpservices__title mb-25">
                  <Link href={`/services/${item.url}`}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
                {/* <div className="tpservices__btn mt-30">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </Link>
                        </div> */}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ServiceWrapper
