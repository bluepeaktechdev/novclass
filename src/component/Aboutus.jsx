import React from 'react'
import Card from './Card'

const Aboutus = () => {
  return (
    <div className="">
        <article className="">
          <div className="grid grid-cols-3 gap-4 divide-x w-[90%] rounded-3xl bg-amber-200 mx-auto relative -mt-33">
            <Card
              number="01"
              sub="Causes"
              body="We support education, healthcare, and poverty reduction."
              link="See Proof"
            />
            <Card
              number="02"
              sub="Get involved"
              body="Volunteer or donate your skills to make a difference."
              link="View Financials"
            />
            <Card
              number="03"
              sub="Donation"
              body="Contribute today and help us change lives and build a better future."
              link="Learn More"
            />
          </div>
        </article>
      </div>
  )
}

export default Aboutus
