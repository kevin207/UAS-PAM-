import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      
      <Text style={styles.homeTitle}>Selamat Datang di FakeStore</Text>

      <Text style={styles.subTitle}>Kategori Produk</Text>

      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Produk', {
              nama: "Men's Clothing",
              kategori: "men's clothing",
            });
          }}>
          <Text>Men Cloth</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => {
            navigation.navigate('Produk', {
              nama: "Women's Clothing",
              kategori: "women's clothing",
            });
          }}>
          <Text>Women Cloth</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.btnWrap}>
        <TouchableOpacity style={styles.btn} onPress={() => {
              navigation.navigate('Produk', {
                nama: 'Electronics',
                kategori: "electronics",
              });
            }}>
            <Text>Electronics</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {
              navigation.navigate('Produk', {
                nama: 'Jewelery',
                kategori: "jewelery",
              });
            }}>
            <Text>Jewelery</Text>
          </TouchableOpacity>
      </View>
  
      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

  container:{
    display:'flex',
    paddingTop:'25%',
    backgroundColor: 'green',
    height:'100%',
  },

  homeTitle:{
    width:'90%',
    alignSelf:'center',
    fontSize:40,
    textAlign:'center',
    marginBottom:'30%',
    color:'white',
  },

  subTitle:{
    width:'80%',
    alignSelf:'center',
    fontSize:30,
    textAlign:'center',
    marginBottom:'5%',
    color:'white',
  },

  btnWrap:{
    display:'flex',
    flexDirection:'row',
    alignSelf:'center',
  },

  btn:{
    padding:5,
    paddingVertical:50,
    borderWidth:2,
    marginHorizontal:5,
    marginVertical:5,
    width:'40%',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:5,
    borderColor:'white',
  },
  

});
  

export default Home