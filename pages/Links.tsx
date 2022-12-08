import styled from "@emotion/styled";
import Background from "../components/Background";
import { motion } from "framer-motion";
import {
  keyframes,
  MediaQuery,
  Title,
  Tooltip,
} from "@mantine/core";
import { GrMail } from "react-icons/gr";
import { RiGithubLine } from "react-icons/ri";
import { AiOutlineCodepen } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
function Links() {
  return (
    <>
      <Background />
      <MediaQuery
        largerThan={900}
        styles={{ width: "60vw", marginTop: "50px" }}
      >
        <MediaQuery smallerThan={900} styles={{ width: "100vw" }}>
          <StyledContainer
            initial={{ opacity: 0, translateY: -90 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div className="page-group">
              <StyledTitle className="page-title">&lt;links&gt;</StyledTitle>
            </motion.div>
            <MediaQuery largerThan={900} styles={{ maxWidth: "60vw" }}>
              <MediaQuery smallerThan={900} styles={{ maxWidth: "100vw" }}>
                <StyledGroup
                  initial={{ opacity: 0, translateX: -90 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <StyledLink className="link-icon">
                    <Tooltip
                      label="E-mail"
                      withArrow
                      arrowSize={10}
                      color="#8159e1"
                      openDelay={50}
                      closeDelay={50}
                    >
                      <Link
                        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=renattocasttro@gmail.com"
                        target="_blank"
                      >
                        <GrMail />
                      </Link>
                    </Tooltip>
                  </StyledLink>
                  <StyledLink className="link-icon">
                    <Tooltip
                      label="Github"
                      withArrow
                      arrowSize={10}
                      color="#8159e1"
                      offset={15}
                      openDelay={50}
                      closeDelay={50}
                    >
                      <Link
                        href="https://github.com/renatomcc/"
                        target="_blank"
                      >
                        <RiGithubLine />
                      </Link>
                    </Tooltip>
                  </StyledLink>
                  <StyledLink className="link-icon">
                    <Tooltip
                      label="Codepen"
                      withArrow
                      arrowSize={10}
                      color="#8159e1"
                      openDelay={50}
                      closeDelay={50}
                    >
                      <Link
                        href="https://codepen.io/renato-castro-the-lessful"
                        target="_blank"
                      >
                        <AiOutlineCodepen />
                      </Link>
                    </Tooltip>
                  </StyledLink>
                  <StyledLink className="link-icon">
                    <Tooltip
                      label="Linkedin"
                      withArrow
                      arrowSize={10}
                      color="#8159e1"
                      openDelay={50}
                      closeDelay={50}
                    >
                      <Link
                        href="https://www.linkedin.com/in/renato-castro-b54b82249/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </Tooltip>
                  </StyledLink>
                </StyledGroup>
              </MediaQuery>
            </MediaQuery>
          </StyledContainer>
        </MediaQuery>
      </MediaQuery>
    </>
  );
}

export default Links;

const StyledContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  color: white;
  gap: 20px;
`;

const StyledGroup = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledLink = styled(motion.div)`
  svg {
    fill: #3e2775;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    &:hover {
      transform: scale(1.15);
      fill: #8159e1;
    }
  }
`;

const StyledTitle = styled(Title)`
  padding-bottom: 10px;
`;

const Appear = keyframes({
  "from, 0% to": { opacity: "0" },
  "100%": { opacity: "1" },
});
