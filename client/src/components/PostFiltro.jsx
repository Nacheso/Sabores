import React, { Component } from "react";
import axios from "axios";
import "../components/views.css";
import { Link } from "react-router-dom";

class PostFiltro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postFiltro: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/Api/CoctelesRouter")
      .then((response) => {
        this.setState({ postFiltro: response.data.cocteles });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }

  render() {
    const { postFiltro, errorMsg } = this.state;
    return (
      <div>
        <p>
          {postFiltro.length
            ? postFiltro.map((cocteles) => (
                <Link to={`/CoctelInfo/${cocteles._id}`}><button>
                  <div class="wrapper" key={cocteles._id}>
                    {cocteles.name}
                  </div>
                  </button>
                  </Link>
                
              ))
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </p>
      </div>
    );
  }
}

export default PostFiltro;
