import React, { Component } from "react";
import { connect } from "react-redux";
import { AppLoading } from "expo";
import { View, Text, H3, Row, Grid } from "native-base";

import { fetchChannels } from "../redux/actions";

// import Searchbar from "../Searchbar";

class Channels extends Component {
  state = { collapsed: false };

  async componentDidMount() {
    await this.props.fetchChannels();
  }

  render() {
    const channelLinks = this.props.channels.map(channel => (
      <Text>{channel.name}</Text>
    ));
    return <View style={{ flexDirection: "column" }}>{channelLinks}</View>;
  }
}

const mapStateToProps = state => ({
  user: state.user,
  channels: state.rootChannels.channels,
  loading: state.rootChannels.loading
});

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels())
  };
};
//just a comment ..
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
