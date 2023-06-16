import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="wrap">
      <YoutubeItem
        image="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        avatar="https://images.unsplash.com/photo-1686665078326-a66869d34f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
        title="This is a title 2"
        author="Lion Duong 2"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1686682308774-4ebfe0c93dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
        avatar="https://images.unsplash.com/photo-1686665078326-a66869d34f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
        title="This is a title 1"
        author="Lion Duong"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        avatar="https://images.unsplash.com/photo-1686665078326-a66869d34f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
        title="This is a title 2"
        author="Lion Duong 2"
      ></YoutubeItem>
      <YoutubeItem
        image="https://images.unsplash.com/photo-1686682308774-4ebfe0c93dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
        avatar="https://images.unsplash.com/photo-1686665078326-a66869d34f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
        title="This is a title 1"
        author="Lion Duong"
      ></YoutubeItem>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="avatar-image" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="avatar-image" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "Default title"}</h3>
          <h4 className="youtube-author">{props.author || "Default Author"}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
