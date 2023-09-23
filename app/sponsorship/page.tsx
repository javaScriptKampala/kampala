import PricingPlans from '@/components/Sponsorship/PricingPlans'
import Head from 'next/head'
import React from 'react'

type Props = {}

const SponsorshipPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>JavaScript Kampala | Home</title>
      </Head>
      <div className="container">
        <PricingPlans />
      </div>
    </>  )
}

export default SponsorshipPage