import "./profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="coverPic"
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt="profilePic"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com">
              <InstagramIcon fontSize="large" />
            </a>

            <a href="https://www.twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>John Doe</span>

            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small" />
                <span className="place">USA</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize="small" />
                <span className="website">ak.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>

          <div className="right">
            <MailOutlineIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
}
