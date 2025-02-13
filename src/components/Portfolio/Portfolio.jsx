import { useContext } from "react";
import Context from "../../context/context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Wrapper, Content, Grid, Box, Text } from "./Portfolio.style";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,

      delayChildren: 0.5,
      ...transition,
    },
  },
};

const box = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ...transition } },
};

const img = {
  hover: {
    scale: 1.1,
    transition: { ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

function Portfolio({ showItems }) {
  const { portfolioList } = useContext(Context);

  const showPortfolioList = showItems ? portfolioList.slice(0, showItems) : portfolioList;

  return (
    <Wrapper id="portfolio">
      <Content>
        <Grid variants={container} initial="hidden" whileInView="show" exit="hidden" viewport={{ once: true }}>
          {showPortfolioList.map((item) => (
            <Box key={item.id} variants={box} whileInView="show">
              <Link to={item.path}>
                <div>
                  <motion.img variants={img} whileHover="hover" src={item.cover} alt={item.title} />
                </div>
                <Text>
                  <h2>{item.title}</h2>
                  <p>{item.category}</p>
                </Text>
              </Link>
            </Box>
          ))}
        </Grid>
      </Content>
    </Wrapper>
  );
}

export default Portfolio;
