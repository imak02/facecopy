import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //Temporary data
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
      img: "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
    },
    {
      id: 3,
      name: "John Doe",
      userId: 3,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
      img: "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      userId: 4,
      profilePic:
        "https://images.pexels.com/photos/14664638/pexels-photo-14664638.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ex earum animi repellat nam assumenda tempore iusto unde, libero consequuntur tempora nisi inventore voluptatum.",
    },
  ];
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
