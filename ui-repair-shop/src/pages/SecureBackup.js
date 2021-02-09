import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import Config from "../config"

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {

  const teamGrid = false && <TeamCardGrid subheading={<Subheading>Our Team</Subheading>}
/>
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>Secure Backup</Subheading>}
        heading="Get the required software"
        buttonRounded={false}
        description="The first step to get support is obtaining AeroAdmin for Windows and Linux or TeamViewer for Mac, the software that allows remote support. Get either one by clicking the link below."
        primaryButtonText="Download for Windows"
        primaryButtonUrl="https://ulm.aeroadmin.com/AeroAdmin.exe"
        secondaryButtonText="Download for Mac"
        secondaryButtonUrl="https://download.teamviewer.com/download/TeamViewer.dmg"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Obtain the code</Subheading>}
        heading="Get the two numbers"
        description="Once you obtained the software, run it and get the two codes: the connection code and the secret PIN."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />

      <MainFeature1
        subheading={<Subheading>Contact us</Subheading>}
        heading="Reach out to us"
        description="Send us a message with the two numbers -connection code and PIN- and we'll contact you back to start the live support session."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />
      <MainFeature1
        subheading={<Subheading>Solving it</Subheading>}
        heading="Live diagnostics"
        description="Once the problem has been diagnosed you can choose whether to repair it remotely with us, to send me the computer or to fix it yourself."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={true}
      />         
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "Hardware",
            description: "Some hardware problems can be detected remotely, although not solved without physical intervention."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Software",
            description: "Most software and configuration problems can be solved remotely."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Backup configuation",
            description: "We can configure your Secure Backup solution remotely and get it running in no time. Don't lose any file!"
          },
        ]}
        linkText=""
      />
      {teamGrid}
      <Footer />
    </AnimationRevealPage>
  );
};
