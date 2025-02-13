import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { Divider, Heading, Gallery } from "../../components";

import { Wrapper, Content } from "./Graphic.style";

import { photos } from "../../utils/photos";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      ...transition,
    },
  },
};

const Graphic = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Wrapper>
        <Heading title="Graphic design" />
        <Divider />
        <Content>
          <motion.div variants={container} initial="hidden" whileInView="show" exit="hidden" viewport={{ once: true }}>
            <Gallery galleryID="my-gallery" images={photos} />
          </motion.div>
        </Content>
      </Wrapper>
    </motion.div>
  );
};

export default Graphic;
