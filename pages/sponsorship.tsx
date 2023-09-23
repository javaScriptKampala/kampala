import PricingPlans from "@/components/Sponsorship/PricingPlans";
import Head from "next/head";
import React from "react";

export default function sponsorship() {
  return (
    <>
      <Head>
        <title>JavaScript Kampala | Home</title>
      </Head>
      <div className="container">
        <PricingPlans />
      </div>
    </>
  );
}
