import React from "react";
// import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Item from './Item';
import ItemForm from './ItemForm.js';


class ItemParentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMerchList: []
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainMerchList = this.state.mainMerchList.concat(newItem);
    this.setState({
      mainMerchList: newMainMerchList
    });
  }

  render(){
    return (
      <Container className="pt-2">
        <Row className="border rounded shadow-sm">
          <Col md={8} className="p-3 fw-light">
            <ListGroup>
              {this.state.mainMerchList.map((item) => 
                <Item title={item.title}
                  description={item.description}
                  inventory={item.inventory}
                  imageURL={item.imageURL}
                  key={item.id}
                />
              )}
            </ListGroup>
          </Col>
          <Col md={4} className="py-3 px-4 fw-light">
            <Row className="text-center border rounded shadow-sm pb-5 pt-3 px-3">
              <Col>
                <ItemForm onNewItemCreation={this.handleAddingNewItemToList} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ItemParentContainer;