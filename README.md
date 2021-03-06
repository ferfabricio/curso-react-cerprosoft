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

#### Instalando Axios

`yarn add axios`

#### Como funciona uma API REST

GET /task ==> todos os resultados
GET /task/:id => recurso especifico
POST /task = enviar body com objeto => criar novo recurso
PUT /task/:id = enviar body com objeto => update no recurso (todos campos)
PATH /task/:id = enviar body com objeto parcial => atualiza campo especifico
DELETE /task/:id => excluir recurso especifico

### Promises

function () : Promise

const asyncFunction = Promise((resolve, reject) => {
    if (false) {
        resolve();
    } else {
        reject();
    }
})

asyncFunction
    .then()
    .catch();

async function exemplo () {
    // alguma coisa async
}

#### Adicionando permissão de segurança no android

https://developer.android.com/training/articles/security-config

## Aula 6

### Instalando o ui-kitten

Site do tema https://akveo.github.io/react-native-ui-kitten/

#### Instalando dependências

`yarn add @ui-kitten/components @eva-design/eva react-native-svg`

`yarn add @ui-kitten/eva-icons`

#### Configurando o Theme

- Passo 1: Adicionar dependências no arquivo App.js

```
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
```

- Passo 2: Adicionar o provider do theme antes do return
```
  <ApplicationProvider {...eva} theme={eva.light}>
    ... aqui vai o conteudo que tinha antes (DadosProvider ....)
  </ApplicationProvider>
```

- Passo 3: Instando os icones
```
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
```

Adicionar dentro do ApplicationProvider o IconRegistry
```
<IconRegistry icons={EvaIconsPack} />
```

- Passo 4: Customizar o theme

Escolher o as cores a seu gosto no site https://colors.eva.design/

Baixar o json e colar ele na pasta `src`

Importar o json no App.js
```
import * as theme from './custom-theme.json';
```

Alterar o ApplicationProvider para utilizar o theme
```
<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
```