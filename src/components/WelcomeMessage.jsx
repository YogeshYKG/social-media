const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center>
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">Welcome</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4">
              Hi There ! Welcome to our platform. We are glad to have you here.
              You can share your thoughts, feelings, and experiences with us.
              You can also read and react to other people's posts. We hope you
              have a great time here. Start by creating your first post.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
              >
                Creat Post
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={onGetPostClick}
              >
                Get Post From Server
              </button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default WelcomeMessage;
