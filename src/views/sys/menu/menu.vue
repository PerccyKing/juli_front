<template>
    <div class="app-container">
        <juli-table :config="config">
            <template v-slot:operation-button>
                <el-button type="primary" icon="el-icon-plus">新增</el-button>
            </template>
        </juli-table>

    </div>
</template>

<script>
    import JuliTable from "@/components/JuLi/Table/Index";

    export default {
        name: "Menu",
        components: {JuliTable},
        data() {
            return {
                config: {
                    title: "目录管理",
                    page: true,
                    col: [
                        {title: '名称', index: 'resourceName', name: 'resourceName'},
                        {title: '路径', index: 'resourceUrl', name: 'resourceUrl'},
                        {title: '类型', index: 'resourceType', name: 'resourceType'},
                        {title: '编码', index: 'resourceCode', name: 'resourceCode'},
                        {title: '图标', index: 'icon', name: 'icon'},
                        {
                            title: '图标', index: 'icon_show', name: 'icon',
                            format: this.iconFormat
                        },
                        {title: '排序', index: 'serialNumber', name: 'serialNumber'},
                        {
                            title: '操作', index: 'operate', name: 'operate', width: '300', fixed: 'right',
                            format: this.operateFormat
                        },
                    ],
                    data: {
                        "page": 1,
                        "total": 1,
                        "records": 3,
                        "rows": [
                            {
                                "id": "1299634999808016386",
                                "resourceUrl": "",
                                "resourceName": "系统管理",
                                "resourceType": "10",
                                "resourceCode": "SYS_MANAGE",
                                "parentId": "",
                                "icon": "el-icon-eleme",
                                "serialNumber": 0
                            },
                            {
                                "id": "1299635708557312001",
                                "resourceUrl": "",
                                "resourceName": "打卡管理",
                                "resourceType": "10",
                                "resourceCode": "PUNCH_MANAGE",
                                "parentId": null,
                                "icon": "fa-bolt",
                                "serialNumber": 10
                            },
                            {
                                "id": "1300405019106373634",
                                "resourceUrl": "",
                                "resourceName": "test",
                                "resourceType": "10",
                                "resourceCode": "TEST",
                                "parentId": "",
                                "icon": "",
                                "serialNumber": 30
                            }
                        ]
                    },
                    pageSizes: [10, 30, 50, 100],
                    pageSize: 10
                }
            }
        },
        methods: {
            iconFormat: (h, params) => {
                let icon = params.row.icon
                let classes = {}
                classes[icon] = true
                let obj = [
                    h('i', {
                        class: [
                            classes
                        ],
                    }),
                ]
                return h('div', obj);
            },
            operateFormat: (h, params) => {
                return h('div', [
                    h('el-button', {
                        props: {
                            type: 'primary',
                            size: 'mini',
                            icon: 'el-icon-edit'
                        }
                    }, '编辑'),
                    h('el-button', {
                        props: {
                            type: 'danger',
                            size: 'mini',
                            icon: 'el-icon-delete'
                        }
                    }, '删除')
                ]);
            }
        }
    }
</script>

<style scoped>

</style>
