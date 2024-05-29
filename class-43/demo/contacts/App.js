import { useEffect, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Button, AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (permission && !permission.granted) {
      requestPermission()
    }
  })

  if (!permission) {
    // Camera permissions are still loading.
    return <View><Text>Loading Camera Permissions</Text></View>;
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        width="100%"
        title="My Camera App"
        leading={props => (
          <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
        )}  
      />
      <CameraView style={styles.camera} facing={facing}> 
        <Button title="Button" onPress={toggleCameraFacing} />
        {/* <Button transparent dark onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </Button> */}
      </CameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  appBar: {
    width: '100%'
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  }
});
