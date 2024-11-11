import React from 'react';
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>GETABOAT - FOR SALE</Text>
  </View>
);

const Boat = ({ title, year, icon_name, poster }) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <View style={styles.header}>
          <Icon name={icon_name} size={20} color="#ffffff" />
          <Text style={styles.title}> {title}</Text>
        </View>
        <Text style={styles.description}>{year}</Text>
        <Image source={poster} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  headerContainer: {
    backgroundColor: '#d3d3d3',
    paddingVertical: 10,
    // borderBottomWidth: 2,
    // borderTopWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginBottom: 10,

  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: 20,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555555',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: '#333333',
    padding: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Boat;
