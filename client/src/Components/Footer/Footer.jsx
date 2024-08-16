import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
    const styles = {
        socialIconSize: {
          height: 40,
          width: 40,
        },
      };

  return (
    <footer id="footer">
      <h4>&#169; Chilejay7 &#183; Developer 2024</h4>
      <div className="icon-container">
        <div className="icon">
          <SocialIcon
            style={styles.socialIconSize}
            bgColor="black"
            fgColor="white"
            url="https://github.com/chilejay7"
          />
          <h5>GitHub</h5>
        </div>

        <div className="icon">
          <SocialIcon
            style={styles.socialIconSize}
            bgColor="blue"
            fgColor="white"
            url="https://www.linkedin.com/in/cody-burkholder-4b072848/"
          />
          <h5>LinkedIn</h5>
        </div>

      </div>
    </footer>
  );
}
