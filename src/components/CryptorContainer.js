import React from "react";

import { connect } from "react-redux";
import { View, FlatList, Text } from "react-native";
import { fetchCoinData } from "../actions/fetchCoinData";
import CoinCard from "./CoinCard";
import { updateTime } from "../utils/constants";

class CryptorContainer extends React.Component {
  state = { showLoaging: false };
  componentDidMount() {
    this.props.fetchCoinData(this.props.currency, this.props.page);
    this.startTimer();
  }

  startTimer = () =>
    (this.timer = setTimeout(
      _ => this.props.fetchCoinData(this.props.currency, this.props.page, true),
      updateTime
    ));

  restartTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.startTimer();
    }
  };

  fetchData = () => {
    clearTimeout(this.timer);
    this.props.fetchCoinData(this.props.currency, this.props.page);
  };

  onScrool = () => {
    this.setState({ showLoaging: true });
    this.fetchData();
  };

  componentDidUpdate() {
    this.restartTimer();
  }

  render() {
    const { currency } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.data}
          onRefresh={this.fetchData}
          onEndReachedThreshold={0.5}
          onEndReached={this.onScrool}
          keyExtractor={item => item.id}
          refreshing={!!this.props.isFetching}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CoinCard {...item} currency={currency} />}
        />
      </View>
    );
  }
}

const mapProps = ({ cryptor }) => cryptor;

export default connect(mapProps, { fetchCoinData })(CryptorContainer);
