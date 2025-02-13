import { motion } from "framer-motion";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import { Divider, Form, Heading } from "../../components";

import { Wrapper } from "./Contact.style";

const Contact = ({ titlePrefix, titleSuffix }) => {
  useDocumentTitle(`${titlePrefix}${titleSuffix}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <Wrapper>
        <Heading title="Contact" />
        <Divider />
        <Form />
      </Wrapper>
    </motion.div>
  );
};

export default Contact;
