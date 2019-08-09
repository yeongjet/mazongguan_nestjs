export const createBatch = {
    conditions: {
        all: [
            {
                fact: '操作者是否有操作该商品权限(该商品是否属于该操作者)',
                operator: 'equal',
                value: true
            },
            {
                fact: 'personalFoulCount',
                operator: 'greaterThanInclusive',
                value: 6
            }
        ]
    },
    event: {
        type: 'pass',
        transaction: [{ operator: 'Player has fouled out!' }]
    }
}
