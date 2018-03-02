import React from "react";
import { images, defaultImg } from "../utils/constants";
import { View, Text, Image, StyleSheet } from "react-native";

const commonCurrency = require("../utils/Common-Currency.json");

class CoinCard extends React.PureComponent {
  render() {
    const {
      name,
      symbol,
      price_usd,
      currency,
      last_updated,
      percent_change_1h: l1h,
      percent_change_7d: l7d,
      percent_change_24h: l24d
    } = this.props;

    const isDown_last1 = parseFloat(l1h) < 0;
    const isDown_last7 = parseFloat(l7d) < 0;
    const isDown_last24 = parseFloat(l24d) < 0;
    const lowerCurrency = (currency || "usd").toLowerCase();

    const price = parseFloat(this.props["price_" + lowerCurrency]).toFixed(2);

    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          <Image
            style={styles.image}
            source={{ uri: images[symbol] || defaultImg }}
          />
          <Text style={styles.title}>
            <Text style={styles.bold}>{symbol}</Text> - {name}
          </Text>
          <Text style={styles.price}>
            {currency} {price}
          </Text>
        </View>

        <View style={[styles.row, styles.bottom]}>
          <Text style={styles.textCenter}>
            1h:{" "}
            <Text style={[styles.quotation, isDown_last1 && styles.red]}>
              {l1h}%
            </Text>
          </Text>
          <Text style={styles.textCenter}>
            24h:{" "}
            <Text style={[styles.quotation, isDown_last24 && styles.red]}>
              {l24d}%
            </Text>
          </Text>
          <Text style={styles.textCenter}>
            7d:{" "}
            <Text style={[styles.quotation, isDown_last7 && styles.red]}>
              {l7d}%
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row"
  },

  header: {
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    paddingHorizontal: 15,
    borderBottomColor: "#EEE"
  },

  bottom: {
    paddingVertical: 10,
    justifyContent: "center"
  },

  container: {
    display: "flex",
    paddingHorizontal: 5,
    borderBottomWidth: 3,
    borderBottomColor: "#EFEFEF"
  },

  image: {
    width: 40,
    height: 40
  },

  textCenter: {
    flex: 1,
    textAlign: "center"
  },

  title: {
    flex: 1,
    paddingHorizontal: 10
  },

  price: {
    color: "#333",
    fontWeight: "bold",
    paddingHorizontal: 10
  },

  bold: {
    color: "#333",
    fontWeight: "bold"
  },

  quotation: {
    color: "#6BD715",
    fontWeight: "bold"
  },

  red: {
    color: "red"
  }
});

export default CoinCard;
