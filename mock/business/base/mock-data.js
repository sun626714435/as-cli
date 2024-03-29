module.exports = {
  "POST:/app/menu": {
    status: "ok",
    data: [
      {
        label: "菜单一",
        icon: "dashboard",
        address: "/table",
        id: 1,
      },
      {
        label: "菜单二",
        icon: "mail",
        address: "/view",
        id: 2,
      },
      {
        label: "菜单三",
        icon: "setting",
        address: "/list",
        id: 3,
      },
      {
        label: "菜单四",
        icon: "shopping",
        address: "/littleTable",
        id: 4,
      },
    ],
  },
  "POST:/app/list": {
    status: "ok",
    data: [
      {
        id: 1,
        name: "第1行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
      {
        id: 2,
        name: "第2行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
      {
        id: 3,
        name: "第3行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
      {
        id: 4,
        name: "第4行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
      {
        id: 5,
        name: "第5行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
      {
        id: 6,
        name: "第6行",
        col1: "col1",
        col2: "col2",
        col3: "col3",
        col4: "col4",
        col5: "col5",
        col6: "col6",
        col7: "col7",
        col8: "col8",
        col9: "col9",
        col10: "col10",
        col11: "col11",
        col12: "col12",
      },
    ],
  },
  "POST:/demo/delete": (req, res) => {
    res.status(200).send({
      status: "ok",
      data: null,
    });
  },
};
