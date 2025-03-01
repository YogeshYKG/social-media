import { useRef, useContext } from "react";
import { PostListData } from "../store/post-list";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);

    navigate("/");
  };

  return (
    <form className="create-post" onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          placeholder="Your user Id.."
          className="form-control"
          id="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="titel" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          placeholder="How are you feeling today.."
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="3"
          ref={postBodyElement}
          placeholder="Tell us more about it.."
          className="form-control"
          id="body"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Numner of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          placeholder="How many People reacted to it.."
          className="form-control"
          id="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your Hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          placeholder="Please Enter tags using Space"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post Now
      </button>
    </form>
  );
};

export default CreatePost;
