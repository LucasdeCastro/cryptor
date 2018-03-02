import React from "react";
import { currencyList } from "../utils/constants";
import { fetchCoinData } from "../actions/fetchCoinData";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

class SelectCoin extends React.Component {
  changeCurrency = e => _ => {
    this.props.fetchCoinData(e, this.props.page, true);
    this.props.close();
  };

  render() {
    const { currency } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.selectContainer}>
          <Text style={styles.title}>Change Currency</Text>
          <ScrollView>
            {currencyList.map(e => (
              <TouchableOpacity
                key={e}
                style={styles.item}
                onPress={this.changeCurrency(e)}
              >
                <Text
                  style={currency == e ? styles.itemSelect : styles.itemText}
                >
                  {e}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={this.props.close}>
            <Text style={styles.itemSelect}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },

  button: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFE506"
  },

  item: {
    paddingVertical: 10,
    borderBottomColor: "#EEE",
    borderBottomWidth: 1,
    paddingHorizontal: 15
  },

  itemText: {
    color: "#000"
  },

  itemSelect: {
    color: "#000",
    fontWeight: "bold"
  },

  selectContainer: {
    height: 300,
    width: "100%",
    borderRadius: 2,
    backgroundColor: "#FFFF"
  },

  title: {
    padding: 10,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center"
  }
});

const mapProps = ({ cryptor }) => cryptor;

export default connect(mapProps, { fetchCoinData })(SelectCoin);
