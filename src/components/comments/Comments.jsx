import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //Dummy data
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="profile" />
        <input type="text" placeholder="Write a comment..." />
        <button>Post</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilePic} alt="profile" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
