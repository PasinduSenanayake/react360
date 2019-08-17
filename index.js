import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    VrButton,
    asset
} from 'react-360';

import Entity from 'Entity';


export default class Hello360 extends React.Component {


  constructor(){
    super();
    this.state = {
      buttonCount: 0
    }

  }


  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React {this.state.buttonCount}
          </Text>

        </View>
        <VrButton key={`button`}
                  onClick={() =>{
                    const tempButtonCount = this.state.buttonCount+1;
                    this.setState({buttonCount:tempButtonCount})
                  }}>
          <Animated.View >
            <Text>Test</Text>
          </Animated.View>
        </VrButton>
      </View>


    );
  }
};


export class React3DView extends  React.Component{

  state = {
    rotated: 0,
  };

  componentDidMount() {
    window.setInterval(()=>this.handleRotate(), 1000);
  }
  handleRotate = () => {
    this.setState(({ rotated }) => ({ rotated: rotated + 1 }));
  };
  render() {
    const { rotated } = this.state;

    return (
        <Entity
            source={{
              gltf2: asset('scene.gltf'),
            }}
            style={{transform:[
                {translate: [-10, 0, -10]},
                {scaleX: 0.02 },
                { scaleY: 0.02 },
                { scaleZ: 0.02 },
                { rotateX: rotated },
                { rotateY: rotated },
              ]}}
        />
    )

  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);

AppRegistry.registerComponent('React3DView', () => React3DView);
