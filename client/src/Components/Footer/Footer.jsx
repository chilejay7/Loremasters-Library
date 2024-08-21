import { SocialIcon } from "react-social-icons";
import Copyright from "./Copyright";
import "./Footer.css";

export default function Footer() {
    const styles = {
        socialIconSize: {
          height: 37,
          width: 37,
        },
      };

  return (
    <footer id="footer">
      {/* <h4>Chilejay7 &#183; Developer 2024</h4> */}
      <div className="icon-container">
        <div className="icon">
          <SocialIcon
            style={styles.socialIconSize}
            bgColor="black"
            fgColor="white"
            url="https://github.com/chilejay7"
            target="_blank"
          />
          <h5 className="icon-label">GitHub</h5>
        </div>

        <div className="icon">
          <SocialIcon
            style={styles.socialIconSize}
            bgColor="black"
            fgColor="white"
            url="mailto:codyburk7@gmail.com"
            target="_blank"
          />
          <h5 className="icon-label">Contact</h5>
        </div>

        <div className="icon">
          <SocialIcon
            style={styles.socialIconSize}
            bgColor="black"
            fgColor="white"
            url="https://www.linkedin.com/in/cody-burkholder-4b072848/"
            target="_blank"
          />
          <h5 className="icon-label">LinkedIn</h5>
        </div>

        </div>
        <Copyright />
    </footer>
  );
}
