import request from '@/utils/request'

export function index(data) {
    return request({
        url: '/admin/sys/resource/api_list',
        method: 'post',
        data
    })
}
