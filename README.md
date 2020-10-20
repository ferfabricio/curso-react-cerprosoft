# curso-react-cerprosoft
Curso React Cerprosoft

## Aula 4

### instalar o react navigation
`npm install --save @react-navigation/native`

ou

`yarn add @react-navigation/native`

### instalar dependências

- https://reactnavigation.org/docs/getting-started

```
npm install --save react-native-reanimated react-native-gesture-handler
npm install --save react-native-screens react-native-safe-area-context
npm install --save @react-native-community/masked-view
```

ou

```
yarn add react-native-reanimated react-native-gesture-handler
yarn add react-native-screens react-native-safe-area-context
yarn add @react-native-community/masked-view
```

### navigation stack

`npm install @react-navigation/stack`

ou

`yarn add @react-navigation/stack`


### import do gesture handler

Adicionar no arquivo index.js

`
import 'react-native-gesture-handler';
`

### Adicionar o navigation container

Adicionar no arquivo `src/App.js`

`import { NavigationContainer } from '@react-navigation/native';`

### Adicionar o stack

Adicionar no arquivo `src/App.js`

`import { createStackNavigator } from '@react-navigation/stack';`

## Aula 5

### API

Recurso utilizado: mockapi.io

URL: `https://5f8f61c8693e730016d7b064.mockapi.io/api/v1/task`

