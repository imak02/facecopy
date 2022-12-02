import "./leftBar.scss";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CollectionsIcon from "@mui/icons-material/Collections";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="userProfile"
            />
            <span>John Doe</span>
          </div>
          <div className="item">
            <Diversity2OutlinedIcon sx={{ fontSize: 30 }} />
            <span>Friends</span>
          </div>
          <div className="item">
            <PeopleOutlineIcon sx={{ fontSize: 30 }} />
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <SmartDisplayOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Watch</span>
          </div>
          <div className="item">
            <TimerOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <CalendarMonthIcon sx={{ fontSize: 30 }} />
            <span>Events</span>
          </div>
          <div className="item">
            <SportsEsportsIcon sx={{ fontSize: 30 }} />
            <span>Gaming</span>
          </div>
          <div className="item">
            <CollectionsIcon sx={{ fontSize: 30 }} />
            <span>Gallery</span>
          </div>
          <div className="item">
            <VideoCameraBackIcon sx={{ fontSize: 30 }} />
            <span>Videos</span>
          </div>
          <div className="item">
            <EmailOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <AttachMoneyOutlinedIcon sx={{ fontSize: 30 }} />
            <span>Fundraisers</span>
          </div>
          <div className="item">
            <MenuBookIcon sx={{ fontSize: 30 }} />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <AutoStoriesIcon sx={{ fontSize: 30 }} />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}
