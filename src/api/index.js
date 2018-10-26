
const HOST = 'http://localhost:3001';

export function get(url) {
    return fetch(HOST + url).then(response => response.json())
}

export function post(url,data) {
    return fetch(HOST + url,{
        method:'POST',
        headers:{
            "Content-Type":'application/json',
            "Accept":'application/json' // 接收json格式的数据类型
        },
        body:JSON.stringify(data)
    }).then(response => response.json())
}