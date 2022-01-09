//导入react

import React from 'react'
import ReactDOM from 'react-dom'


//************************************************************** */
// //2创建react元素

// const tittle = React.createElement('h1',null, 'Hello-react 脚手架')

// ReactDOM.render(tittle, document.getElementById('root'))

//使用JSX创建react元素

// 函数调用表达式

// const sayHi = () => 'Hi~'

// const name = 'Jack'
// const age = 19

// const div = <div>我是一个div</div>

// const title = (
//   <h1 className = "tittle">
//     Hello {name} {age} {sayHi()} <p/>
//     {div}
//     {/* <p>{ {a: '6'} }</p> ERROR BECAUSE IT IS OBJECT*/} 
//     {/* YOU CANT USE IF OR FOR TOO FAILED TO COMPILE */}
//     </h1>
// )

//************************************************************** */
// const isLoading = false

//if else表达
// const loadData = () =>{
//   if (isLoading){
//     return <div>loading...</div>
//   }

//   return <div>数据加载完成，此处显示加载后的数据</div>
// }

// 三元表达式
// const loadData = () =>{
//   return isLoading? (<div>loading...</div>):(<div>数据加载完成，此处显示加载后的数据</div>)
// }

//逻辑与运算符
// const loadData = () => {
//   return isLoading && (<div>loading...</div>)
// }

// const title = (
//   <h1>
//     条件渲染:
//     {loadData()}
//   </h1>
// )

//************************************************************** */

//列表渲染

//歌曲列表

// const songs = [
//   {id: 1, name: '痴心绝对'},
//   {id: 2, name: '像我这样的人'},
//   {id: 3, name: '南山南'},
// ]

// const list = (
//   <ul>
//     {songs.map(item => <li key={item.id}>{item.name}</li>)}
//   </ul>
// )

//引入css
// import './css/index.css'
//JSX样式处理
// const list = (

//   行内样式
//   <h1 style = {{color: 'red', backgroundColor: 'skyblue'}}>
//     JSX的样式处理
//   </h1>

//   类名样式 创建className 然后外面写css，别忘了引入 import
//   <h1 className = 'title' style = {{color: 'red', backgroundColor: 'skyblue'}}>
//     JSX的样式处理
//   </h1>

// )

//********************************************************************** */

//使用函数创建组件
//约定1 函数名字开头要大写。 rule 1 The starting letter of function's name should be upper case
//约定2 函数必须要有返回值。the function must return or return null to return nothing

//普通函数写法
// function Hello(){
//   return (
//     <div>这是我的第一个函数</div>
//   )
// }

//箭头函数写法
// const Hello = () => <div>这是我的第一个函数</div>

//********************************************************************** */

//使用类创建react组件 | Using class to create react component
//约定1类组件名字开头要大写
//约定2要继承React.Component
//约定3要有render()
//约定4要有返回值 return


// class Hello extends React.Component{
//   render() {
//     return (
//       <div>这是我的第一个类组件</div>
//     )
//   }
// }

//********************************************************************** */

//抽离到独立js文件中创建组件

//导入Hello组件

// import Hello from './Hello'

//************************************************************** */

//React事件处理

//使用类组件绑定事件
// class App extends React.Component{
//   //时间处理程序
//   handleClick(){
//     console.log('单击时间触发了')
//   }
//   render(){
//     return(
//       <button onClick={this.handleClick}>点我，点我</button>
//     )
//   }
// }

//使用函数组件绑定
// const App = () => {

//   function handleClick(){
//     console.log('单击时间触发了')
//   }

//   return(
//     <button onClick={handleClick}>点我，点我</button>
//   )

// }

//时间对象
//react里面是合成对象
//事件对象我们用e，可以编辑浏览器功能
// class App extends React.Component{

//   handleClick(e){
//     e.preventDefault()
//     console.log('单击对象触发了')
//   }
//   render(){
//     return(
//       <a href='https://google.com/' onClick={this.handleClick}>去谷歌</a>
//     )
//   }
// }

ReactDOM.render(<App />,document.getElementById('root'))