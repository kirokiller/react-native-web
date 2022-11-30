import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { PageProps } from '../../types';

export default class Home extends Component<PageProps> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate('detail')}
        />
      </View>
    );
  }
}
