import { StyleSheet, Text, Image, View , FlatList , TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect , useState } from 'react';
import axios from 'axios'

const home = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=902f3529552c485d99a281d250542fc4');
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTrending = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2024-07-25&sortBy=popularity&apiKey=902f3529552c485d99a281d250542fc4')
    }
  }

  const renderArticle = ({ item }) => (
    <View style={styles.articleContainer}>
      <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
        <Text style={styles.articleSource}>{item.source.name}</Text>
      </View>
    </View>
  );

  return (
   <SafeAreaView style={styles.container}>

     <View style={styles.header}>
     <Image source={require("../../assets/d-images/Vector.png")} style={{height:20, width: 70}} />
     <MaterialIcons name="notifications-none" size={24} color="#4E4B66" />
     </View>

    <View style={styles.search}>
   
     <TextInput style={styles.searchInput} placeholder="Search" />
     <SimpleLineIcons name="equalizer"  size={24} color="#4E4B66"  />
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Trending</Text>
      <Text style={{color: "#4E4B66", }}>see all</Text>
      </View>


      <FlatList
        data={articles.slice(0, 1)}
        renderItem={renderArticle}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.sectionTitle}>Latest</Text>
      <FlatList
        data={articles.slice(1)}
        renderItem={renderArticle}
        keyExtractor={(item) => item.url}
      />

   </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
     container : {
            flex:1,

     },

     header: {
        
          display:"flex",
          flexDirection: "row",
          paddingHorizontal: 7,
          paddingVertical: 20,
          justifyContent:'space-between',
          alignItems:'center',
          marginHorizontal:20
          
          
     },
     search: {

      borderWidth:1,
      borderColor: "#4E4B66",
      display:'flex',
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
      marginHorizontal: 25,
      paddingHorizontal: 5,
      borderRadius:6

      

     }, 
     searchInput: {
      flex: 1,
      padding: 12,
    
     
    },
    section: {
      padding:15,
      marginHorizontal:15
      ,display:'flex',
       flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      },

    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
     
    },
    articleContainer: {
      flexDirection: 'row',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#e0e0e0',
    },
    articleImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    articleContent: {
      flex: 1,
      marginLeft: 16,
    },
    articleTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    articleDescription: {
      marginTop: 8,
      fontSize: 14,
      color: '#555',
    },
    articleSource: {
      marginTop: 8,
      fontSize: 12,
      color: '#007AFF',
    },
})