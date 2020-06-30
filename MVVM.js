let app = new Euv({
    data: {
        name: '张三'
    }
});

function Euv(option) {
    this.data = option.data;

}

// 监听一个对象中的所有属性
function Observe(obj) {
    if (!obj || typeof obj == 'object') {
        return;
    }
    Object.keys(obj).forEach(property=>{
        
    })
}