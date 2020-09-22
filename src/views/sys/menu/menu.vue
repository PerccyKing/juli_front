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
                    url: '',
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
