import React, { useContext, useState, useEffect, useRef } from 'react';
import { userList } from '../../../mockData';
import { Table, Input, Button, Popconfirm, Form, Modal } from 'antd';

export default function User() {
  const [dataSource, setDataSource] = useState(userList)
  const [isShowModal, setIsShowModal] = useState(false)
  const [id, setId] = useState(5)

  const column = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: '用户名字',
      dataIndex: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
    {
      title: '权限',
      dataIndex: 'role',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <>
            <Button type="link" onClick={showModal}>删除</Button>
            <Modal
              centered
              visible={isShowModal}
              onCancel={() => showModal(false)}
              onOk={() => {
                handleDelete(record.id)
                showModal(false)
              }}
            >
              确认删除该用户吗？？？？？？
            </Modal>
          </>
        ) : "",
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: () => {
        return (
          <Button type="link">编辑</Button>
        )
      }
    },
  ];

  const showModal = (isShowModal) => {
    setIsShowModal(isShowModal)
  }

  const handleDelete = (id) => {
    const dataSource = [...dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.id !== id),
    });
  };

  const handleSimpleAdd = () => {
    const newData = {
      id: id,
      username: `JOJO ${id}`,
      email: '3786437@163.com',
      createTime: '2021-12-02 22:00:16',
      role: "超级管理员",
      address: `London, Park Lane no. ${id}`,
    };
    setDataSource([...dataSource, newData])
    setId(id + 1)
  };

  const columns = column.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
      }),
    };
  });

  return (
    <div>
      <Button
        onClick={handleSimpleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        添加用户
      </Button>
      <Table
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}



