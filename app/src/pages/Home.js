import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';




function Home() {

  const navigation = useNavigation();

  function nextPage() {

  }

  function Item({ item }) {
    return (
      <View style={styles.listItem}>
        <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30 }} />
        <View style={{ alignItems: "center", flex: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Receitas')} style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center" }} >
          <Text style={{ color: "green" }}>Ver +</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const data = [
    {
      "name": "Sanduiche",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://t2.uc.ltmcdn.com/pt/posts/0/1/3/como_fazer_sanduiche_natural_9310_orig.jpg"
    },
    {
      "name": "hamburguer",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://blog.supernosso.com/wp-content/uploads/2021/10/Como-Preparar-o-sanduiche-Perfeito-540x470.jpg"
    },
    {
      "name": "Sanduiche",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://t2.uc.ltmcdn.com/pt/posts/0/1/3/como_fazer_sanduiche_natural_9310_orig.jpg"
    },
    {
      "name": "hamburguer",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://blog.supernosso.com/wp-content/uploads/2021/10/Como-Preparar-o-sanduiche-Perfeito-540x470.jpg"
    },
    {
      "name": "Sanduiche",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://t2.uc.ltmcdn.com/pt/posts/0/1/3/como_fazer_sanduiche_natural_9310_orig.jpg"
    },
    {
      "name": "hamburguer",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://blog.supernosso.com/wp-content/uploads/2021/10/Como-Preparar-o-sanduiche-Perfeito-540x470.jpg"
    },
    {
      "name": "Sanduiche",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://t2.uc.ltmcdn.com/pt/posts/0/1/3/como_fazer_sanduiche_natural_9310_orig.jpg"
    },
    {
      "name": "hamburguer",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://blog.supernosso.com/wp-content/uploads/2021/10/Como-Preparar-o-sanduiche-Perfeito-540x470.jpg"
    },
    {
      "name": "Sanduiche",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://t2.uc.ltmcdn.com/pt/posts/0/1/3/como_fazer_sanduiche_natural_9310_orig.jpg"
    },
    {
      "name": "hamburguer",
      "email": "miyah.myles@gmail.com",
      "position": "----",
      "photo": "https://blog.supernosso.com/wp-content/uploads/2021/10/Como-Preparar-o-sanduiche-Perfeito-540x470.jpg"
    },

  ]




  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchItem}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />


      <FlatList
        style={{ flex: 1 }}
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  );
}

export default Home;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 60
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  searchItem: {
    marginTop: 5,
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  }
});