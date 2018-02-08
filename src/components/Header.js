import React from "react";
import {
  View,
  Text,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import SelectCoin from "./SelectCoin";
import { connect } from "react-redux";

class Header extends React.Component {
  state = { visible: false };

  toggleModal = _ => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <View style={styles.headerCointainer}>
        <StatusBar
          backgroundColor={visible ? "rgba(0,0,0,0.7)" : "#FAFAFA"}
          barStyle={"dark-content"}
        />
        <Text style={styles.header}>criptomoedas</Text>

        <TouchableOpacity onPress={this.toggleModal}>
          <View style={styles.button}>
            <Text>
              Change <Text style={styles.bold}>{this.props.currency}</Text>
            </Text>
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={visible}
          onRequestClose={this.toggleModal}
        >
          <SelectCoin close={this.toggleModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerCointainer: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    borderBottomColor: "#EEE",
    backgroundColor: "#FAFAFA"
  },

  header: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold"
  },

  bold: {
    fontWeight: "bold"
  },

  button: {
    padding: 10
  }
});

const mapProps = ({ cryptor }) => cryptor;

export default connect(mapProps)(Header);
