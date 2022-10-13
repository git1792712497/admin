
export const columns = [
	{
		title: '下单日期',
		dataIndex: 'orderDate',
		key: 1,
		width: 150
	},
	{
		title: '订单编号',
		dataIndex: 'orderNo',
		width: 240,
		key: '2',
	},
	{
		title: '客户',
		dataIndex: 'channelName',
		width: 120,
		key: '3'
	},
	{
		title: '收件人',
		dataIndex: 'receiver',
		width: 70,
		key: '7',
	},
	{
		title: '电话',
		dataIndex: 'receiverPhone',
		key: '8',
		width: 100,
	},
	{
		title: '收件地址',
		dataIndex: 'address',
		width: 160,
		key: '9',
	},
	{
		title: '总重量(KG)',
		dataIndex: 'totalWeight',
		width: 100,
		key: '10',
	},
	{
		title: '总金额(元)',
		dataIndex: 'totalMoney',
		width: 100,
		key: '11',
	},
	{
		title: '原订单号',
		dataIndex: 'originalOrderNo',
		width: 150,
		key: 12,
	},
	{
		title: '订单状态',
		dataIndex: 'status',
		key: '15',
		width: 100,
	},
	{
		title: '结算状态',
		dataIndex: 'settleStatus',
		width: 80,
		key: '16',
	},
	{
		title: '备注',
		dataIndex: 'remark',
		width: 80,
		key: '17',
	},
	{
		title: '操作',
		fixed: 'right',
		align:'center',
		width: 80,
		key: 18,
	}
]