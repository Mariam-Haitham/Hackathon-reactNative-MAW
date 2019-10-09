import React, { Component } from "react";

import { connect } from "react-redux";
import {
  Container,
  Header,
  Content,
  Card,
  Item,
  Input,
  Button,
  Text,
  View,
  H1
} from "native-base";
import { addChannel } from "../redux/actions";

class AddChannels extends Component {
  state = {
    name: "",
    image_url: ""
  };

  submitChannel = () => {
    this.props.addChannel(this.state);
  };
  onTextchange = (name, image_url) => this.setState({ name, image_url });

  render() {
    const { name, image_url } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <View>
              <Item>
                <Input
                  name="name"
                  value={name}
                  placeholder="Username"
                  onChangeText={name => this.setState({ name })}
                />
              </Item>
              <Item last>
                <Input
                  value={image_url}
                  placeholder="Image_url"
                  name="image_url"
                  onChangeText={image_url => this.setState({ image_url })}
                />
              </Item>
              <Button block dark type="submit" onPress={this.submitChannel}>
                <Text>Add</Text>
              </Button>
            </View>
          </Card>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    addChannel: newChannel => dispatch(addChannel(newChannel))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddChannels);
