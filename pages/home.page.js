import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label,
  List,
  ListItem,
  Thumbnail
} from "native-base";

export default class HomePage extends React.Component {

    static navigationOptions = {
        title: 'ราคาสินค้าเกษตร',
        headerTitleStyle: {
            textAlign: 'center',
         
            flexGrow:1,
            alignSelf:'center',
        },
        headerStyle: {
            backgroundColor: 'green',
            
        },
          headerTintColor:'white',
          
    };

  state = {
    items: [],
    loading: true,
  }

  nameArray = [
    "John Doe",
    "Peter Corp",
    "Tessa",
    "Depp",
    "Tony Stark",
    "Bruce Banner"
  ];

  items = [
    { name: 'สมชาย', tel: '(884)-630-1206', imageURL: 'https://randomuser.me/api/portraits/men/73.jpg' },
    { name: 'สุชาติ', tel: '0901-875-7972', imageURL: 'https://randomuser.me/api/portraits/men/43.jpg' },
    { name: 'สมหมาย', tel: '(099)-724-0617', imageURL: 'https://randomuser.me/api/portraits/men/66.jpg' },
    { name: 'สมศักดิ์', tel: '(063)-186-6153', imageURL: 'https://randomuser.me/api/portraits/men/59.jpg' },
    { name: 'สุขใจ', tel: '140-536-9678', imageURL: 'https://randomuser.me/api/portraits/men/33.jpg' },
  ];


  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log('เริ่มแอพ...');

    let response = await fetch("http://aginfo.oae.go.th/mobile_App_php/json/day.php");
    // console.log(response);
    let json = await response.json();
   // console.log(json)

    this.setState({
      items: json
    })
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ loading: false });
  }

  itemSelected = (category)=>{
   // console.log('เลือกแล้ว',category.group_n);
    //alert(category.group_n)
    this.props.navigation.navigate('Product',category);
  }
  
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        
        <Content>

          <List dataArray={this.state.items}
            renderRow={(rowData) => {
              return (
                <ListItem onPress={()=>this.itemSelected(rowData)} thumbnail>
                  <Left>
                    <Thumbnail square source={ { uri: 'http://aginfo.oae.go.th/Mobile_App_php/' + rowData.image_g } } />
                  </Left>
                  <Body>
                    <Text>{rowData.group_n}</Text>
                    <Text note>{rowData.group_c}</Text>
                  </Body> 
                </ListItem>
              )
            }}
          >

          </List>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  itemFont: {
    color: 'green'
  }
})