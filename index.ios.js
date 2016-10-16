/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;

class List extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>列表</Text>
            </View>

        );
    }
}


class Edit extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>制作</Text>
            </View>

        )
    }
}

class Account extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>账户</Text>
            </View>

        )
    }
}


class GoodCare extends React.Component {
    static title = '<TabBarIOS>';
    static description = 'Tab-based navigation.';
    static displayName = 'TabBarExample';

    state = {
        selectedTab: 'list',
        notifCount: 0,
        presses: 0,
    };

    _renderContent = (color:string, pageText:string, num
?:
    number
) => {
    return(

<View style={[styles.tabContent, {backgroundColor: color}]}>
<Text style={styles.tabText}>{pageText}</Text>
<Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
</View>
)
    ;
}
;

render()
{
    return (
        <TabBarIOS
            unselectedTintColor="gray"
            tintColor="#33CC99"
            barTintColor="white">
            <TabBarIOS.Item
                systemIcon="most-viewed"
                selected={this.state.selectedTab === 'list'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'list',
                    });
                }}>
                <List/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                systemIcon="search"
                selected={this.state.selectedTab === 'edit'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'edit',
                    });
                }}>
                <Edit/>
            </TabBarIOS.Item>
            <TabBarIOS.Item
                systemIcon="favorites"
                selected={this.state.selectedTab === 'account'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'account',
                    });
                }}>
               <Account/>
            </TabBarIOS.Item>
        </TabBarIOS>
    );
}
}

var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
});


// module.exports = GoodCare;
AppRegistry.registerComponent('GoodCare', () => GoodCare);
