import { NextResponse } from "next/server"
export default function middleware(req) {
  let url = req.url
  const Hide_URL_Links = [
    "http://localhost:8080/blog-details",
    "http://localhost:8080/portfolio-details",
    "http://localhost:8080/product-details",
    "http://localhost:8080/coming-soon",
    "http://localhost:8080/shop",
    "http://localhost:8080/sign-in",
    "http://localhost:8080/sign-up",
    "http://localhost:8080/blog",
    "http://localhost:8080/blog-grid",
    "http://localhost:8080/help-center",
    "http://localhost:8080/job-details",
    "http://localhost:8080/job-list",
    "http://localhost:8080/pricing-plan",
    "http://localhost:8080/privacy-policy",
    "http://localhost:8080/wishlist",
    "http://localhost:8080/faq"
  ]
  const isURlExist = Hide_URL_Links.indexOf(url) > -1
  if (isURlExist) {
    return NextResponse.redirect("http://localhost:8080/page-not-found")
  }
}
