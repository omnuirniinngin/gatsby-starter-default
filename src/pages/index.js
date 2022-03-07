import * as React from "react"
import { Link } from "gatsby"
import HomeNav from "../components/HomeNav"

import Layout from "../components/Layout"
import Hero from "../components/home/Hero"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Niño Muring" description="Freelance digital marketer that has extensive knowledge on creating marketing-centric Web and Graphic Designs that focused on converting visitors to customers." />
    <HomeNav />
    <Hero />
  </Layout>
)

export default IndexPage
