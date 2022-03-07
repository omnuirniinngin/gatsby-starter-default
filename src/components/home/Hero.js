import React from "react"
import HeroImage from "../../images/hero_image.jpg"
import "../../styles/sass/pages/_home.scss"

export default function Hero() {
  return (
    <div className="hero__section d-flex">
      <div className="d-flex__column">
        <div className="hero__section-headline ">
          <h1>
            Experienced <br /> <span>Digital Marketer</span>
          </h1>
          <p>
            Freelance digital marketer that has extensive knowledge on creating
            marketing-centric Web and Graphic Designs that focused on converting
            visitors to customers.
          </p>
        </div>
      </div>
      <img src={HeroImage} />
    </div>
  )
}
