var table=[{
	name:'新增一个城市',
	id:'0',
	type:'add',
	father:null
},{
  name:'bj',
  id:'1',
  type:'city',
  father:null,
  children:[{
  	name:'新增一个部门',
  	id:'1-0',
  	type:'add',
  	father:'1'
  },{
  	name:'产品设计部门',
  	id:'1-1',
  	type:'department',
  	father:'1',
  	children:[{
  		name:'新增一个岗位',
  		id:'1-1-0',
  		type:'add',
  		father:'1-1'
  	},{
  		name:'产品总监',
  		id:'1-1-1',
  		type:'title',
  		father:'1-1',
  		children:[{
  			name:'招聘要求',
  			id:'1-1-1-0',
  			type:'yaoqiu',
  			father:'1-1-1',
  			children:[
  				{
  					name:'反转地球',
  					id:'1-1-1-0-0',
  					type:'expression',
  					father:'1-1-1-0'
  				}
  			]
  		},{
  			name:'岗位描述',
  			id:'1-1-1-1',
  			type:'miaoshu',
  			father:'1-1-1',
  			children:[
  				{
  					name:'反转地球',
  					id:'1-1-1-1-0',
  					type:'expression',
  					father:'1-1-1-1'
  				}
  			]
  		}]
  	}]
  }]	
}]