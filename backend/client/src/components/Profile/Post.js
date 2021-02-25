import { connect } from "react-redux";
import * as utils from '../../Utils';

function Post(props) {
    const deletePost = async () =>{
        try {
            let response = await fetch(
              `${utils.backendRoute}/posts/del/${props.post}`,
              {
                method: "DELETE",
                headers: {
                  "jwt": props.setToken
                }
              }
            );
            await response.json();
            props.history.push('/home');
          } catch (err) {
            console.log(err);
        }
    }
    if(props.name === props.getUser){
        return(
            <div className="column is-one-third" style={{ marginTop: "-20px" }} >
                <figure className="image is-1x1">
                    <div className="x-logo delete is-medium" onClick={deletePost} />
                    <img src={`${utils.imageRoute}/${props.post}`} alt="Placeholder" />
                </figure>
          </div>
        )
    }else{
        return(
            <div className="column is-one-third">
                <figure className="image is-1x1">
                    <img src={`${utils.imageRoute}/${props.post}`} alt="Placeholder" />
                </figure>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(Post);
  