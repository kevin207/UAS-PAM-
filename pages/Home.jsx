import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import React, { useState, useEffect } from "react";
import axios from 'axios';

import Card from '../components/Card';

const Home = () => {

    const [produk, setProduk] = useState([]);

    useEffect(() => {
      getData();
    }, []);
  
    function getData() {
      axios.get("https://fakestoreapi.com/products/").then(function (response) {
        setProduk(response.data);
      });
    }

  return (
    <SafeAreaView style={styles.container}>
      
    <Text style={styles.categoryTitle}>Product</Text>
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
  
    categoryTitle: {
      paddingTop: '15%',
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
  

export default Home