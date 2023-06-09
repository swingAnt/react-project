import React, { useEffect,useState } from 'react'
import styles from './index.less'
import { Button } from 'antd';
import { DatabaseTwoTone, AppstoreTwoTone } from '@ant-design/icons';
import Table from '@/components/Table'
import Card from '@/components/Card'
import Seach from '@/components/Seach'
import {getUserInfo} from '@/api/index.jsx'


const list = [
    {
      key: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
      key: 3,
      name: 'Not Expandable',
      age: 29,
      address: 'Jiangsu No. 1 Lake Park',
      description: 'This not expandable',
      type:"1"
    },
    {
      key: 4,
      name: 'Joe Black',
      age: 32,
      type:"2",
      address: 'Sydney No. 1 Lake Park',
      description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
  ];
export default function ListView(props) {
    useEffect(() => {
         getUserInfo().then(user=>{
          console.log('user',user)
        })
           
    }, [])
    const [view, setView] = useState('1');

    return <div className={styles.Container}>
        <Seach />
          <div className={styles.changeView}>
                <Button size='small' type={view === '1' ? 'primary' : "default"} className={styles.button} icon={<AppstoreTwoTone />} onClick={() => {
                    setView('1')
                }}>卡片</Button>
                <Button size='small' type={view === '2' ? 'primary' : "default"} className={styles.button} icon={<DatabaseTwoTone />} onClick={() => {
                    setView('2')
                }}>列表</Button>
            </div>
            {view === '1' ?
                <Card list={list}/>
                : <Table list={list} />
            }  
    </div>
}