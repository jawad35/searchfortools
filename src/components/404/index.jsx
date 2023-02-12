import Link from "next/link"

import FooterTwo from "../common/Footers/FooterTwo"
import Header from "../common/Header"
import PageNotFound from "./PageNotFound"

const index = () => {
  return (
    <>
      <Header />
      {/* <Breadcrumb title="PAGE NOT FOUND" subtitle="404" /> */}

      <div className="error-area pt-100 pb-140">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9">
              <PageNotFound />
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  )
}

export default index
