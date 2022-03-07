import * as React from "react"
import { Link } from "gatsby"
import { FaBars } from "@react-icons/all-files/fa/FaBars"


const Header = ({ siteTitle }) => (
  <header>
    <div className="hamburger">
      <Link to="/">
        <FaBars />
      </Link>
    </div>
  </header>
)

export default Header
