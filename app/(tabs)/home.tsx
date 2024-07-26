import { StyleSheet, Text, Image, View , FlatList , TextInput , TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import moment from 'moment';


import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect , useState } from 'react';
import axios from 'axios'
import { RotateInDownLeft } from 'react-native-reanimated';

const home = () => {
  const [articles, setArticles] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<any>('All');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=902f3529552c485d99a281d250542fc4');
      setArticles(response.data.articles);
      console.log(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTrending = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2024-07-25&sortBy=popularity&apiKey=902f3529552c485d99a281d250542fc4')
    }  catch(e) {
      console.error(e)
    }
  }


  const categories : string[] = [
    'Sports', 'Business', 'Culture', 'Health', 'Travel',
    'Science', 'Education', 'All', 'Agriculture', 'Economic', 'Financial'
  ];  


  

  const renderCategory = ({ item }) => {
    const isSelected = item === selectedCategory;
    return (
      <TouchableOpacity onPress={() => setSelectedCategory(item)}>
        <View style={[styles.categoryContainer, isSelected && styles.selectedCategory]}>
          <Text style={[styles.categoryText, isSelected && styles.selectedCategoryText]}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderArticle = ({ item }) => (
    <View style={styles.articleContainer}>
      <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />
      <View style={styles.articleContent}>
        <Text style={styles.articleDescription}>{item.description ? item.description : "no content provided"}</Text>

        <View style={styles.articleFooter}>
          <Text style={styles.articleSource}>{item.source.name}</Text>
          <Text style={styles.articleTime}>{moment(item.publishedAt).fromNow()}</Text>
        </View>

      </View>
    </View>
  );


  const renderTrendArticle = ({ item }) => (
    <View style={{height:2500,marginHorizontal:30}}>
      <Image source={require('../../assets/d-images/warship.png')} style={{height:150 ,width:300, borderRadius:10 }} />
      <View style={{}}>
        <Text style={{color: "#4E4B66",marginBottom:5}}>Europe</Text>
        <Text style={{fontWeight:"700"}}>Russian warship: Moskva sinks in Black Sea</Text>
        <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",marginHorizontal:1}}>

        <View style={{display:'flex', flexDirection:"row", gap:5}}>
        <Text style={{color:"#4E4B66", fontWeight:"700"}}>BBC News</Text>
        <Text>4h ago</Text>
        </View>
        <Feather name="more-horizontal" size={24} color="black" />

        </View>
      </View>
    </View>
  );

  return (
   <SafeAreaView style={styles.container}>

     <View style={styles.header}>
     <Image source={require("../../assets/d-images/Vector.png")} style={{height:20, width: 70}} />
     <View style={styles.notifyIcon}>
     <MaterialIcons name="notifications-none" size={24} color="#4E4B66" />
     </View>
     </View>

    <View style={styles.search}>
    <EvilIcons name="search" size={24} color="black" />
     <TextInput style={styles.searchInput} placeholder="Search" />
     <SimpleLineIcons name="equalizer"  size={24} color="#4E4B66"  />
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Trending</Text>
      <Text style={{color: "#4E4B66", }}>see all</Text>
      </View>

     
      <FlatList
        
        data={articles.slice(0, 1)}
        renderItem={renderTrendArticle}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
            <View style={styles.section}>
      <Text style={styles.sectionTitle}>Latest</Text>
      <Text style={{color: "#4E4B66", }}>see all</Text>
      </View>
       
       <View>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        horizontal
        style={{marginHorizontal:10}}
        showsHorizontalScrollIndicator={false}
      />
       </View>
      
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
            backgroundColor: 'white',

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

     notifyIcon: {
      backgroundColor:"white", 
      shadowColor:"black",
      borderRadius: 2 ,
      shadowOpacity: 0.2,
      shadowRadius:5,
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
      paddingHorizontal:15,
      paddingVertical:7,
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
      color:"##4E4B66",
      fontWeight: 'bold',
    },
    articleDescription: {
      marginTop: 8,
      fontSize: 14,
      color: '#555',
    },
    // articleSource: {
    //   marginTop: 8,
    //   fontSize: 12,
    //   color: '#007AFF',
    // },
    categoryContainer: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    selectedCategory: {
      borderBottomColor: 'blue',
    },
    categoryText: {
      fontSize: 16,
      color: '#000',
    },
    selectedCategoryText: {
     
      fontWeight: 'bold',
    },

    articleFooter: {
      flexDirection: 'row',
      
      alignItems: 'center',
      marginTop: 8,
      gap:10
    },
    articleSource: {
      fontSize: 12,
      color: '#4E4B66',
      fontWeight:"700",
      marginLeft:10
    },
    articleTime: {
      fontSize: 12,
      color: '#555',
    },
})