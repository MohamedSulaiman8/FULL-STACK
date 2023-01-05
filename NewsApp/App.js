import {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Alert,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    height: 1040,
  },
  title: {
    backgroundColor: 'maroon',
    height: 120,
    fontWeight: 'bold',
  },
  heading: {
    padding: 20,
    fontSize: 35,
    color: 'beige',
    textAlign: 'center',
  },
  sub1: {
    fontSize: 25,
    padding: 10,
    color: 'red',
    fontWeight: 'bold',
  },
  sub1content: {
    padding: 20,
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 100,
    marginLeft: 90,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  content: {
    height: 300,
    backgroundColor: 'lightgrey',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  footer: {
    marginTop: 848,
    backgroundColor: 'maroon',
  },
  footertext: {
    textAlign: 'center',
    color: 'beige',
  },
  contentmain: {
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  maincontainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
   input: {
    height: 40,
    width: 140,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.heading}>BCC NEWS</Text>
          <Button
            title="SignIn"
            color="red"
            onPress={() => navigation.navigate('Form')}
          />
        </View>
        <View style={{ height: 50 }}>
          <Text style={styles.sub1}>LATEST NEWS:</Text>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              Top 3 upcoming Mahindra SUVs in 2023 including the electric XUV400
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.toiimg.com/thumb/msid-96539620,imgsize-536860,width-400,resizemode-4/96539620.jpg',
              }}
            />
            <Button
              title="News"
              onPress={() => navigation.navigate('Second')}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              Live: Chinese make travel plans as Covid rules ease further
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.toiimg.com/thumb/imgsize-28932,msid-96526975,width-400,resizemode-4/96526975.jpg',
              }}
            />
            <Button title="News" onPress={() => navigation.navigate('Third')} />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              Terror attack averted in J&K's Udhampur, 15-kg IED defused: Police
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://static.toiimg.com/thumb/msid-96544809,imgsize-2123932,width-400,resizemode-4/96544809.jpg',
              }}
            />
            <Button
              title="News"
              onPress={() => navigation.navigate('Fourth')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footertext}>ALL RIGHTS RESERVED</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>BCC NEWS</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          The prices of the upcoming Mahindra XUV400 will be revealed next
          month. It will be Mahindra’s first electric SUV in the Indian market.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://www.financialexpress.com/wp-content/uploads/2022/09/2022-Mahindra-XUV400-electric-SUV.jpg',
          }}
        />
        <Text style={styles.contentmain}>
          The XUV400 will get a 39.4 kWh lithium-ion battery pack and is claimed
          to offer a driving range of 456 km on a single charge. Its electric
          motor develops 148 bhp and 310 Nm of torque.
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function ThirdScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>BCC NEWS</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          BEIJING (Reuters) -Chinese people, cut off from the rest of the world
          for three years by stringent COVID-19 curbs, flocked to travel sites
          on Tuesday ahead of borders reopening next month, even as rising
          infections strained the health system and roiled the economy.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://s.yimg.com/ny/api/res/1.2/ePz9LUjkpEQ1t8Ji1niU2Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/reuters.com/0adfa6b00514321a26e04d559c17e6b7',
          }}
        />
        <Text style={styles.contentmain}>
          Zero-COVID measures in place since early 2020 - from shuttered borders
          to frequent lockdowns - last month fuelled the Chinese mainland's
          biggest show of public discontent since President Xi Jinping took
          power in 2012.
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function FourthScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>BCC NEWS</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          Police on Tuesday defused an improvised explosive device (IED)
          weighing 15 kilograms which was recovered in Jammu and Kashmir's
          Udhampur district, officials said.
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://img.etimg.com/thumb/msid-96545027,width-300,height-225,imgsize-337270,,resizemode-75/udhampur-ied-like-material-weighing-around-15-kilogram-stored-in-a-cylindrical-.jpg',
          }}
        />
        <Text style={styles.contentmain}>
          A major terror plan was averted when the cylindrical shaped IED,
          300-400 grams of RDX, seven 7.62 mm cartridges and five detonators
          were recovered in Basantgarh area on Monday, they said. Read more at:
          https://economictimes.indiatimes.com/news/defence/major-terror-attack-averted-in-udhampur-15-kg-ied-defused-jk-cops/articleshow/96544855.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
const Formpage = ({ navigation }) => {
  const [Form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    team: '',
    city: '',
  });
  const formChange = (value, field) => {
    let prev = { ...Form };
    prev[field] = value;
    setForm(prev);
  };
  const handleSubmit = async () => {
    console.log(Form);
    const response = await fetch('http://192.168.9.6:3001/api/insert', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },

      referrerPolicy: 'no-referrer',
      body: JSON.stringify(Form),
    });
    console.log(response.json());
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={(text) => formChange(text, 'name')}
        value={Form.name}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        onChangeText={(text) => formChange(text, 'mobile')}
        value={Form.mobile}
        style={styles.input}
        placeholder="Enter Phone"
      />
      <TextInput
        onChangeText={(text) => formChange(text, 'email')}
        value={Form.email}
        style={styles.input}
        placeholder="Enter Email"
      />
      <TextInput
        onChangeText={(text) => formChange(text, 'team')}
        value={Form.team}
        style={styles.input}
        placeholder="My Team"
      />
      <TextInput
        onChangeText={(text) => formChange(text, 'city')}
        value={Form.city}
        style={styles.input}
        placeholder="City"
      />
      <TouchableHighlight
        onPress={() => {
          handleSubmit();
          Alert.alert('Form Submitted');
        }}>
        <Text style={{padding:10}}>Submit</Text>
      </TouchableHighlight>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="home"
        color="#841584"
      />
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main page' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'News' }}
        />
        <Stack.Screen
          name="Form"
          component={Formpage}
          options={{ title: 'News' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;