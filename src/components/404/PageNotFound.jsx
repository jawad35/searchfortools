import Link from "next/link"

const PageNotFound = () => {
  return (
    <>
      <section class="error-container">
        <span>4</span>
        <span>
          <span class="screen-reader-text">0</span>
        </span>
        <span>4</span>
      </section>
      <h2 className="tp-title text-center">Page Not Found</h2>
      <p class="zoom-area">
        <b>Oops!</b> The page your are looking for doesn't exist or an other
        error occured
      </p>
      <div class="link-container">
        <div className="form-submit">
          <Link href={"/"}>
            <button className="tp-grd-btn" type="submit">
              Go to Home Page
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PageNotFound
