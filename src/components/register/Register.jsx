import "./register.scss";

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>FaceCopy</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quaerat modi enim nisi nemo cupiditate laboriosam quas eligendi
            voluptate, provident asperiores ex molestias, perferendis sit totam
            voluptatum molestiae consequuntur consequatur.
          </p>

          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form action="" className="form">
            <input type="text" name="username" id="" placeholder="Username" />
            <input type="email" name="email" id="" placeholder="Email" />

            <input type="password" name="password" placeholder="Password" />
            <input type="text" name="name" placeholder="Name" />

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
