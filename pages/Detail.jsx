import { StyleSheet, Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute, useNavigation} from '@react-navigation/native';


const Detail = () => {

    const route= useRoute()
    const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.topCard}> 
            <Image source={{ uri: route.params.image }} style={styles.cardIMage}/>
        </View>

        <View style={styles.bottomCard}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Product Title</Text>
                <Text  style={styles.cardDesc}>{route.params.nama}</Text>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Product Category</Text>
                <Text  style={styles.cardDesc}>{route.params.kategori}</Text>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Product Price</Text>
                <Text  style={styles.cardDesc}>${route.params.harga}</Text>
            </View>

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Deskripsi Produk</Text>
                <Text  style={styles.cardDesc}>{route.params.desc}</Text>
            </View>
        </View>

        <View style={styles.btnWrap}>
            <TouchableOpacity style={styles.btnRed}  onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Kembali</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}  onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Beli</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
     </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:'15%',
        color:'black',
    },

    topCard: {
        height: 300,
        width: 300,
        alignSelf: 'center'
    },
    
    cardIMage: {
        height: '100%',
        width: 200,
        aspectRatio: 1/1,
        borderTopLeftRadius:10,
        borderBottomLeftRadius: 10,
      },

      bottomCard: {
          marginTop: '5%',
          width: '80%',
          alignSelf:'center',
      },

      cardContent:{
          marginVertical: 10,
      },

      cardTitle: {
        fontWeight: 'bold',
        marginBottom: 1,
        fontSize: 25,
        color: 'green',
      },

      cardDesc: {
        maxWidth: '100%',
        width: '100%',
        fontSize: 15,
      },
      
      btnWrap:{
         
          padding: 10,
          display:'flex',
          flexDirection:'row',
          justifyContent: 'space-between',
          width:'85%',
          alignSelf:'center',
        paddingBottom:'10%',
      },

      btnRed:{
          backgroundColor:'red',
          padding:15,
          width:120,
          borderRadius:10,
      },

      btn:{
        backgroundColor:'green',
        padding:15,
        width:120,
        borderRadius:10,
    },

      btnText:{
          color:'white',
          fontSize: 18,
          textAlign:'center',
      },

  });
  

export default Detail