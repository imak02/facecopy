import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quaerat modi enim nisi nemo cupiditate laboriosam quas eligendi
            voluptate, provident asperiores ex molestias, perferendis sit totam
            voluptatum molestiae consequuntur consequatur.
          </p>

          <span>Don't you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
            <h1>Login</h1>
          <form action="" className="form">
            <input type="text" name="username" id="" placeholder="Username" />
            <input type="password" name="password" id="" placeholder="Password"/>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
