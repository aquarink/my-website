import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Cv extends Component {
    render(props) {
        return (
            <div>
              {this.props.showStatus === 'true' ? (
                <div>Show CVsss</div>
              ) : (
                <div>Juri Pebrianto CV Disable to View</div>
              )}
            </div>
          );
    }
}

export default Cv;