
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~e658f447-0d7c-4165-8e7f-db22ac80783a; yz_log_seqb=1651840416728; yz_log_seqn=26; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; _kdt_id_=97284269; KDTSESSIONID=YZ972234702845063168YZKVq5OiYQ; nobody_sign=YZ972234702845063168YZKVq5OiYQ; captcha_sid=YZ972234749619941376YZNHJTjXH7; loc_dfp=7a37a754bff16776675ae643c3eb466b; yz_log_ftime=1651840416582; yz_log_uuid=1a22cee1-4818-e2da-ceba-973cc412e6f6`,
'Accept' : `application/json, text/plain, */*`,
'Connection' : `keep-alive`,
'Referer' : `https://shop97476437.youzan.com/wscump/checkin/result?kdt_id=97284269`,
'Accept-Encoding' : `gzip, deflate, br`,
'Host' : `shop97476437.youzan.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x1800142f) NetType/WIFI Language/zh_CN`,
'x-yz-action-id' : `wsc-h5-ump-0ae889d3-1651277541513-316802`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $notify("吊毛11", "吊毛哥1", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

