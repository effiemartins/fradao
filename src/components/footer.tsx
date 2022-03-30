import { FiSend } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const instagram = "fra_dao";
const email = "fradao@yahoo.com";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="copyright">
            FRADAO, supported by <a href="https://gov.near.org/">NEAR</a>
            <br />© All rights reserved
          </div>
          <div className="social">
            {instagram && (
              <a
                className="instagram"
                href={`https://www.instagram.com/${instagram}`}
                title={`Instagram ${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="social-icon" />
              </a>
            )}

            {email && (
              <a
                className="email"
                href={`mailto:${email}`}
                title={`Email ${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiSend className="social-icon" />
              </a>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}
