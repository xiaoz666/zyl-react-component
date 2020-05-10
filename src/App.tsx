import React, { FC } from 'react';
import {Button,Alert} from "./components/index"
const App: FC = () => {
  return (
    <div className="App">
      <div>
      <Button>按钮</Button>
      <Button btnType='primary'>按钮</Button>
      <Button btnType='info' size='lg'>按钮</Button>
      <Button btnType='info' size='lg' disabled>按钮</Button>
      <Button btnType='danger' size='sm'>按钮</Button>
      <Button href='http://baidu.com' btnType='link' size='lg'>按钮</Button>
      <Button btnType='link' size='sm'>按钮</Button>
      </div>
      <div>
        <Alert 
          title='我是标题'
          type='danger'
          content='我是内容我是内容我是内容我是内容'
          onClose={(e:any)=>{
            console.log(e)
          }}
        />
        <Alert 
          title='我是标题'
          type='success'
          content='我是内容我是内容我是内容我是内容'
        />
        <Alert 
          title='我是标题'
          type='warning'
          showClose={false}
          content='我是内容我是内容我是内容我是内容'
        />
        
      </div>
    </div>
  );
}

export default App;
