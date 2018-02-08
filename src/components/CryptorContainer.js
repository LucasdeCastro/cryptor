import React from "react";

import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import { fetchCoinData } from "../actions/fetchCoinData";
import CoinCard from "./CoinCard";
import { updateTime } from "../utils/constants";

class CryptorContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCoinData(this.props.currency);
    this.startTimer();
  }

  startTimer = () =>
    (this.timer = setTimeout(
      _ => this.props.fetchCoinData(this.props.currency),
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
    this.props.fetchCoinData(this.props.currency);
  };

  componentDidUpdate() {
    this.restartTimer();
  }

  render() {
    const { currency } = this.props;
    return (
      <FlatList
        data={this.props.data}
        onRefresh={this.fetchData}
        keyExtractor={item => item.id}
        refreshing={!!this.props.isFetching}
        renderItem={({ item }) => <CoinCard {...item} currency={currency} />}
      />
    );
  }
}

const mapProps = ({ cryptor }) => cryptor;

export default connect(mapProps, { fetchCoinData })(CryptorContainer);
