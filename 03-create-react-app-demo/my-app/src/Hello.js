import React from 'react'

//创建组件，使用类方法

class Hello extends React.Component{
    render(){
        return(
            <div>这是我的第一个抽离到js文件中的组件</div>
        )
    }
}

//别忘了要导出组件

export default Hello