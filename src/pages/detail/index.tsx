import { Button, Text, View } from 'react-native';
import React, { Component } from 'react';
import { PageProps } from '../../types';

export default class Detail extends Component<PageProps> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Detail... again"
          onPress={() => navigation.push('detail')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}
