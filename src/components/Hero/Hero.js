import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> Aboje Obande Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is an opportunity to show case my personal profile to the world,
        things that i can do and things i have done
      </SectionText>
      <Button onClick={() => (window.location = "abojelar@yahoo.com")}>
        abojelar@yahoo.com
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
