import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/createcampaign/createcampaign";
import LeftSidebar from "@/components/leftsidebar/leftsidebar"; // Import the LeftSidebar component

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign Creation | Ad Pilot",
  // other metadata
};

const ContactPage = () => {
  // Define the links for the sidebar
  const sidebarLinks = [
    { label: "View Analytics", href: "/viewanalytics" },
    { label: "Market Insights", href: "/marketinsights" },
    { label: "Chatbot for Queries", href: "/chatbotforqueries" },
    { label: "Manage Campaign", href: "/createcampaign" },
    // Add more links as needed
  ];
  return (
    <div className="flex">
      <LeftSidebar username="User" links={sidebarLinks} /> {/* Add the LeftSidebar */}
      <div className="flex-1 ml-200">
        <Breadcrumb
          pageName="Campaign Creation"
          description=""
        />
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
