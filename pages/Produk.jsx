import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useRoute, useNavigation} from '@react-navigation/native';
import Card from '../components/Card';

const Produk = ( props ) => {

  const [produk, setProduk] = useState([]);
  const route= useRoute()
  const navigation = useNavigation();

  useEffect(() => {
    getData();
  }, []);

   function getData() {
      axios.get(`https://fakestoreapi.com/products/category/${route.params.kategori}`).then(function (response) {
      setProduk(response.data);
    });
  }

  return (

    <SafeAreaView style={styles.container}>
        
      <TouchableOpacity style={styles.btn}  onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Kembali</Text>
      </TouchableOpacity>
      
      <Text style={styles.categoryTitle}>{route.params.nama}</Text>
      <ScrollView style={styles.containerView} showsVerticalScrollIndicator={false}>
      {
        produk.map((produk) => {
          return (
            <Card image={produk.image} key={produk.id} nama={produk.title} kategori={produk.category} harga={produk.price} desc={produk.description}/>
          )
        })
      }
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#cee8c1',
    },

    btn:{
      width:'100%',
    },

    back:{
      backgroundColor: 'green',
      color: 'white',
      paddingTop: '12%',
      width:'100%',
      fontSize: 20,
      paddingLeft:'5%',
    },
  
    categoryTitle: {
      paddingTop: '5%',
      paddingBottom: '5%',
      backgroundColor: 'green',
      fontSize: 30,
      width: '100%',
      textAlign: 'center',
      color: 'white',
    },
  
    containerView:{
      paddingVertical: 10,
      paddingHorizontal: 20, 
      marginBottom: '33%',
    },
  });

export default Produk