const UploadPictureView = ({works, mySubmitHandler, setDesc}) => {
  return (
    <div className="hero has-background-light custom-border-top is-fullheight">
      <div className="custom-container-create-post">
        <div className="custom-create-post">
          <h1 className="title" style={{ textAlign: "center" }}>
            Upload Image
          </h1>
          {works ? (
            <div
              className="notification is-success"
              style={{ textAlign: "center" }}
            >
              {" "}
              Image Successfully Uploaded!!{" "}
            </div>
          ) : null}
          <form onSubmit={mySubmitHandler}>
            <fieldset>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Enter description here..."
                    name="description"
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="file" style={{ marginBottom: "15px" }}>
                <label className="file-label">
                  <input
                    className="file-input"
                    type="file"
                    name="file"
                    id="file"
                  />
                  <span className="file-cta">
                    <span className="file-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                    <span className="file-label">Choose a file…</span>
                  </span>
                </label>
              </div>
              <div
                className="field is-grouped"
                style={{ justifyContent: "center" }}
              >
                <div className="control">
                  <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                  <button className="button is-link is-light">Cancel</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPictureView;
