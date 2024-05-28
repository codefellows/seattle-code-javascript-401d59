import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Button, Linking, Platform } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contactList, setContactList] = useState([]);
  useEffect(() => {
    getContacts();
  }, []);

  async function getContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync();
      if (data.length) {
        setContactList(data);
      }
    }
  }

  function renderContact(contact) {
    console.log(Platform.OS);
  }

  function call(contact) {
    const phoneNumber = contact.phoneNumbers[0].digits;
    // linking
    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(() => {
        Linking.openURL(link);
      })
      .catch(() => console.log('Cannot make phone calls'));
  }
  console.log(renderContact());
  return (
    // Accounts for all the extra junk at the top of most minimum bezel phones
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Contacts</Text>
      <View style={styles.list}></View>
      <FlatList 
        data={contactList}
        keyExtractor={(contact) => contact.id}
        renderItem={({ item }) => {
          return <Button title={`Name: ${item.firstName} ${item.lastName} Number: ${item.phoneNumbers[0].digits}`} onPress={() => call(item)}/>
        }}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    flex: 1,
    backgroundColor: 'red',
    fontSize: 30,
  },
  list: {
    flex: 4,
  }
});
