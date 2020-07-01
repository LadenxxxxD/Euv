function Euv(option) {
    this.data = option.data;
    Observe(this.data);
}

// 监听一个对象中的所有属性
function Observe(obj) {
    if (obj && typeof obj === 'object') {
        Object.keys(obj).forEach(key => {
            console.log(key);
            Object.defineProperty(obj, key, {
                enumerable: true, // 可枚举 (可以遍历)
                configurable: true, // 可配置 （可以使用delete删除）
                writable: true, // 可写入 （可以更改）
                get: function () {
                    return obj[key];
                },
                set: function (newVal) {
                    console.log('监听到', key, '的值变化了', newVal);
                    if (newVal !== obj[key]) {
                        obj[key] = newVal;
                    }
                }
            });
        })
    }
}