import React, {useRef} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const {width: winWidth} = useWindowDimensions();
  console.log('winWidth :>> ', winWidth);
  const refCashAndCoins = useRef(null);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={[styles.header, {width: winWidth}]}>
          <View style={[styles.bgheader]}>
            <View style={styles.headerItem}>
              <View style={styles.item}>
                <Icon name="qr-code-scanner" size={40} color="white" />
                <Text style={styles.textHeader}>สแกน</Text>
              </View>
              <View style={styles.item}>
                <Icon
                  name="barcode"
                  size={40}
                  color="white"
                  type="font-awesome-5"
                />
                <Text style={styles.textHeader}>ชำระ</Text>
              </View>
              <View style={styles.item}>
                <Icon
                  name="recycle"
                  size={40}
                  color="white"
                  type="font-awesome-5"
                />
                <Text style={styles.textHeader}>คูปอง</Text>
              </View>
              <View style={styles.item}>
                <Icon
                  name="wallet"
                  size={40}
                  color="white"
                  type="font-awesome-5"
                />
                <Text style={styles.textHeader}>วอลเล็ท</Text>
              </View>
            </View>
            <View ref={refCashAndCoins} style={styles.cashAndCoins}>
              <View style={styles.cashAndCoinsItem}>
                <View style={styles.cashAndCoinsItemIcon}>
                  <Icon
                    style={{marginHorizontal: 8}}
                    name="wallet"
                    size={24}
                    color="#1491fd"
                    type="font-awesome-5"
                  />
                  <Text style={styles.money}>฿ 30.00</Text>
                </View>
                <View style={{marginHorizontal: 8, marginTop: 8}}>
                  <Text style={[styles.moneyDetail, {color: '#949494'}]}>
                    เติมเงินอัตโนมัติ คลิก!
                  </Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View style={styles.cashAndCoinsItem}>
                <View style={[styles.cashAndCoinsItemIcon]}>
                  <Icon
                    style={{marginHorizontal: 8}}
                    name="currency-usd-circle"
                    size={24}
                    color="gold"
                    type="material-community"
                  />
                  <Text style={styles.money}>30.00</Text>
                </View>
                <View style={{marginHorizontal: 8, marginTop: 8}}>
                  <Text style={[styles.moneyDetail, {color: '#fe9928'}]}>
                    Shopee Coins ของฉัน
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.menu}></View>
        <View style={styles.promotion}></View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  money: {
    fontSize: 17,
  },
  moneyDetail: {
    fontSize: 12,
    color: 'gray',
  },
  divider: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#ccc',
    marginHorizontal: 4,
  },
  cashAndCoins: {
    borderRadius: 12,
    margin: 8,
    padding: 18,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  cashAndCoinsItemIcon: {flexDirection: 'row', alignItems: 'center'},
  cashAndCoinsItem: {
    flex: 1,
    marginHorizontal: 12,
  },
  header: {
    flex: 1,
  },
  bgheader: {
    backgroundColor: '#1491fd',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  container: {
    // justifyContent: 'center',
    flex: 1,
    marginTop: 45,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menu: {},
  promotion: {},
  headerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  textHeader: {
    color: 'white',
    marginVertical: 4,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
});
