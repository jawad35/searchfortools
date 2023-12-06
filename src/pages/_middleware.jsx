import { NextResponse } from "next/server"
import { BASE_URL_APP } from "../utility/Urls"
export default function middleware(req) {
  let url = req.url
  const Hide_URL_Links = [
    `${BASE_URL_APP}/blog-details`,
    `${BASE_URL_APP}/portfolio-details`,
    `${BASE_URL_APP}/product-details`,
    `${BASE_URL_APP}/coming-soon`,
    `${BASE_URL_APP}/shop`,
    `${BASE_URL_APP}/sign-in`,
    `${BASE_URL_APP}/sign-up`,
    `${BASE_URL_APP}/blog`,
    `${BASE_URL_APP}/blog-grid`,
    `${BASE_URL_APP}/help-center`,
    `${BASE_URL_APP}/job-details`,
    `${BASE_URL_APP}/job-list`,
    `${BASE_URL_APP}/pricing-plan`,
    `${BASE_URL_APP}/privacy-policy`,
    `${BASE_URL_APP}/wishlist`,
    `${BASE_URL_APP}/about-me`,
    `${BASE_URL_APP}/faq`
  ]
  const isURlExist = Hide_URL_Links.indexOf(url) > -1
  if (isURlExist) {
    return NextResponse.redirect(`${BASE_URL_APP}/page-not-found`)
  }
}
