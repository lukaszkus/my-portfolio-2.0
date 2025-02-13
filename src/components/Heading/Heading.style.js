import styled from "styled-components";
import { motion } from "framer-motion";

import { breakpoint } from "../../utils";

export const Wrapper = styled.footer`
  padding: 0 2rem 6rem 2rem;

  @media ${breakpoint.desktop} {
    padding: 0 2rem 8rem 2rem;
  }
`;

export const Content = styled(motion.div)`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
  padding-top: 2rem;

  @media ${breakpoint.tablet} {
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }

  @media ${breakpoint.desktop} {
    padding-top: 4rem;
  }

  @media ${breakpoint.desktopXL} {
    max-width: var(--maxWidthXL);
  }
`;

export const Title = styled(motion.h1)`
  width: 100%;
  font-size: 2.5rem;
  font-weight: 600;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  ); */
  background-image: linear-gradient(to right, #209cff 0%, #68e0cf 100%);

  @media ${breakpoint.tablet} {
    font-size: 3.5rem;
  }

  @media ${breakpoint.desktop} {
    font-size: 4.5rem;
  }
`;
