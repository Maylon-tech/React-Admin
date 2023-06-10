import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'

// import { defaultTheme } from 'react-admin'
// import { darkTheme, lightTheme } from './themes'

import UserList from './components/UserList'
import UserCreate from './components/UserCreate'
import UserEdit from './components/UserEdit'

// const theme = {
//   ...defaultTheme,
//   palette: { mode: 'dark' }
// }


const App = () => {
  
  return (
    <Admin 
      style={{ border: '2px solid orange'}}
      
      darkTheme={{ palette: { mode: 'dark'}}}
      dataProvider={restProvider('http://localhost:3000')}
    >

      <Resource  style={{ border: '2px solid orange'}}
        name='posts' 
        list={PostList} 
        create={PostCreate} 
        edit={PostEdit} 
      />  

      <Resource 
        name='users' 
        list={UserList} 
        create={UserCreate} 
        edit={UserEdit} 
      /> 

    </Admin>
  )
}

export default App
