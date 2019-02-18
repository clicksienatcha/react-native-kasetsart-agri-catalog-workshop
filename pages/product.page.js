import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
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
    Thumbnail,
    InputGroup
} from "native-base";
export default class ProductPage extends Component {
    static navigationOptions = ({navigation}) =>{
        return {
            title: navigation.getParam('group_n'),
            headerStyle: {
                backgroundColor: 'green',
                
            },
              headerTintColor:'white',
        }
    }

    state = {
        products: [],

        loading: true,
    }

    componentDidMount (){
        let category = this.props.navigation.state.params;

        //console.log('แสดง', category.group_n);
        //console.log('แสดงtype',category.data);
        
        this.setState({

            products:category.data,
            
        })
        
  
        
    }

    itemSelected = (product)=>{
        //console.log('เลือกแล้ว',product.name);
        //alert(category.group_n)
        this.props.navigation.navigate('Market',product);//ชื่อ page ที่จะส่งข้อมูลไป
        
        
      }

    render() {
   

        return (
           
            <Container>
                <Content>                    
                    <List dataArray={this.state.products}
                    
                        renderRow={(product) => {
                            if(product.type==null){
                                return (
                                    <ListItem thumbnail>
                                     
                                    </ListItem>
                                )
                            }else{
                            return (
                             
                                <ListItem onPress={()=>this.itemSelected(product)} thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: 'http://aginfo.oae.go.th/Mobile_App_php/' +product.image_p }} />
                                    </Left>
                                    <Body>
                                        <Text>{product.name}</Text>
                                        
                                    </Body>
                                </ListItem>
                            )
                            }
                        }}
                    >

                    </List>
                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({})
