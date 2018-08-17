import React, {Component} from 'react';
import {Button, Collapse, Well, Media, Row, Col} from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  render(){
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}
          >
          {this.state.open === false ? `See` : `Hide ` } item details
          {this.state.open === false ? ` +` : ` -` }
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>

                  <img
                    width={100}
                    height={130}
                    alt="thumbnail"
                    src="https://i5.walmartimages.com/asr/99382568-e98b-4a27-b4dd-6705f43bde1f_1.01ed919ba7555419709fdbdf1b8fb930.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                  />

              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }

}
