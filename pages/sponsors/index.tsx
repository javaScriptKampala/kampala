import React from "react"

import RootLayout from "@/components/layout"
import PricingPlans from "@/components/Sponsorship/PricingPlans"

type Props = {}

const SponsorshipPage = (props: Props) => {
	return (
		<RootLayout title="Sponsors">
			<div className="container">
				<PricingPlans />
			</div>
		</RootLayout>
	)
}

export default SponsorshipPage
