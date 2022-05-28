import { StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Card = ( props) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => {
      navigation.navigate('Detail', {
        image: props.image,
        nama: props.nama,
        kategori: props.kategori,
        harga: props.harga,
        desc: props.desc,
      });
    }}>

      <View style={styles.leftCard}>
        <Image source={{ uri: props.image }} style={styles.cardIMage}/>
      </View>
      
      <View style={styles.rightCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Product Title</Text>
          <Text  style={styles.cardDesc}>{props.nama}</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Product Category</Text>
          <Text  style={styles.cardDesc}>{props.kategori}</Text>
        </View>

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Product Price</Text>
          <Text  style={styles.cardDesc}>${props.harga}</Text>
        </View>

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: 'white',
      borderColor: 'green',
      marginVertical: 10,
      height: 225,
      width: '100%',
      maxWidth: '100%',
    },

    leftCard: {
  
    },

    cardIMage: {
      height: '100%',
      width: 160,
      borderTopLeftRadius:10,
      borderBottomLeftRadius: 10,
    },

    rightCard: {
      marginLeft: 20,
      paddingVertical: 20,

    },

    cardContent: {
      marginVertical: 10,
    },

    cardTitle: {
      fontWeight: 'bold',
      marginBottom: 1,
      fontSize: 18,
      color: 'green',
    },

    cardDesc: {
      maxWidth: '70%',
      width: '70%',
      fontSize: 14,
    },
  });

export default Card