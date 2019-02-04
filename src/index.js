import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from './screens/MainScreen.js'

const AppNavigator = createStackNavigator({
    Main: MainScreen
})

const App = createAppContainer(AppNavigator)

export default App
