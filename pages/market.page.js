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
    Thumbnail
} from "native-base";
import ProductPage from './product.page';
export default class MarketPage extends Component {
    static navigationOptions = ({navigation}) =>{
        return {
            title: navigation.getParam('name'),
            headerStyle: {
                backgroundColor: 'green',
                
            },
              headerTintColor:'white',
        }
    }

    state = {
        markets: [],
        unitPrice:'',
        loading: true,
    }

    componentDidMount (){
        let market = this.props.navigation.state.params;
        //console.log('แสดง', market.group_n);

        this.setState({
            markets:market.type,
            unitPrice: market.unit
            
        })
    }

    render() {
        
        let content;
        if(this.state.markets== null){
            content = (<Text>ไม่มีข้อมูลตลาดตอนนี้</Text>);
        }else{
            content = (
                <List dataArray={this.state.markets}
                        renderRow={(markets) => {
                            return (
                                <ListItem thumbnail>
                                    
                                    <Body>
                                        <Text>{markets.marketname}</Text>
                                        <Text note>{markets.price} {this.state.unitPrice} | {markets.daily}</Text>
                                    </Body>
                                </ListItem>
                            )
                        }}
                    >

                    </List>
            );
        }

        return (

            <Container>
                <Content>
                    {content}
                </Content>

            </Container>

        )
    }
}

const styles = StyleSheet.create({})
