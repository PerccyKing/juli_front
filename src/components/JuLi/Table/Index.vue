<template>
    <div class="app-container">
        <div class="block">
            <el-row :gutter="20">
                <el-col :span="6"><h3>{{config.title}}</h3></el-col>
                <el-col :span="12" :offset="6">
                    <div style="float: right">
                        <slot name="operation-button"></slot>
                    </div>
                </el-col>
            </el-row>
            <el-table :data="config.data.rows" style="width: 100%">
                <el-table-column v-for="(item,index) in config.col" :key="item.index"
                                 :prop="item.name"
                                 :label="item.title"
                                 :width="item.width"
                                 :fixed="item.fixed"
                >
                    <template slot-scope="scope">
                        <ex-slot v-if="item.format" :render="item.format" :row="scope.row"
                                 :index="scope.$index"
                                 :column="item">
                        </ex-slot>
                        <span v-else>
                            {{scope.row[item.name]}}
                         </span>
                    </template>
                </el-table-column>
            </el-table>


            <div v-if="config.page" class="pagination-container">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="config.data.page"
                    :page-sizes="config.pageSizes"
                    :page-size="config.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="config.data.records">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    // 自定义内容的组件
    let exSlot = {
        functional: true,
        props: {
            row: Object,
            render: Function,
            index: Number,
            column: {
                type: Object,
                default: null
            }
        },

        render: (h, data) => {
            const params = {
                row: data.props.row,
                index: data.props.index
            }

            if (data.props.column) {
                params.column = data.props.column
            }
            return data.props.render(h, params)
        }
    }


    import JuliTableColum from "@/components/JuLi/Table/Colum/Index";

    export default {
        name: "JuliTable",
        components: {
            JuliTableColum,
            exSlot
        },
        props: {
            config: {
                type: Object,
                required: true,
                default() {
                    return {}
                }
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>
