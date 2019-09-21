import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './screens/MainScreen.js'

const AppNavigator = createStackNavigator({
    Main: MainScreen
})

const App = createAppContainer(AppNavigator)

export default App
