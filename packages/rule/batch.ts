export const createBatch = {
    conditions: {
        all: [
            {
                fact: '操作者是否有操作该商品权限(该商品是否属于该操作者)',
                operator: 'equal',
                value: true
            }
        ]
    },
    event: {
        type: 'pass',
        transaction: [
            {
                operate: '获取批次生码实际总数量'
            }
        ]
    }
}
