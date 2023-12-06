import dynamic from "next/dynamic"
import servicesData from "../../data/servicesData"
const ServiceWrapper = dynamic(() =>
  import("../ServicesPageItems/ServiceWrapper")
)

const ServicesTwo = () => {
  return (
    <>
      <section
        id="tpservices-area"
        className="tpservices-area-2 pt-115 pb-85 p-relative"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">What we Offer</span>
                <h2 className="tp-title">Our Tools Area</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <ServiceWrapper
              servicesData={servicesData.slice(0, 4)}
              title="SEO"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(4, 7)}
              title="Website Management"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(7, 9)}
              title="Media Management"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(9, 10)}
              title="Color Picker"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(10, 11)}
              title="Invoice Generator"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(11, 12)}
              title="Email Management"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(12, 14)}
              title="QR Code Management"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(14, 15)}
              title="Text Content"
            />
            <ServiceWrapper
              servicesData={servicesData.slice(15, 17)}
              title="Calculator"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default dynamic(() => Promise.resolve(ServicesTwo), { ssr: false })
