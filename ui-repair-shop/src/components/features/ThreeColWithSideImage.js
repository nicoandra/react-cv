import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import defaultCardImage from "images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import ShieldIconImage from "images/shield-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import { Trans } from 'react-i18next';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "The description placeholder" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: <Trans i18nKey="landing_page.features.cards.01.title">Technical Support</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.01.description">Software configuration and installation, Windows support, performance tuning.</Trans>
    },
    {
      imageSrc: ShieldIconImage,
      title: <Trans i18nKey="landing_page.features.cards.02.title">Pick-up and Delivery</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.02.description">We can pick-up your device and deliver it back up and running.</Trans>
    },
    { 
      imageSrc: FastIconImage, 
      title: <Trans i18nKey="landing_page.features.cards.06.title">Free estimation</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.06.description">Whether your problem is data-loss, hardware or software misconfiguration: get a free quote before spending a single dime.</Trans>
    },
    {
      imageSrc: ShieldIconImage,
      title: <Trans i18nKey="landing_page.features.cards.03.title">Data recovery</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.03.description">We can recover files and folders from damaged hard-drives, USB flash drives, memory cards and other media in a timely fashion. We charge on data recovery only: no recovery means no charge.</Trans>
    },
    { 
      imageSrc: FastIconImage, 
      title: <Trans i18nKey="landing_page.features.cards.04.title">Fast and responsive</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.04.description">Get a quick answer and quick estimation</Trans>
    },
    { 
      imageSrc: FastIconImage, 
      title: <Trans i18nKey="landing_page.features.cards.05.title">Custom domains and emails</Trans>,
      description: <Trans i18nKey="landing_page.features.cards.05.description">Get your own Internet domain, with unlimited email addresses</Trans>
    },  
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
