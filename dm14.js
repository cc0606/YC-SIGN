
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~3b765dd3-f810-4f04-bc1d-7b8d12494b3e; yz_log_seqb=1651840761340; yz_log_seqn=52; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; _kdt_id_=97284269; KDTSESSIONID=YZ972236148628054016YZkLSS9nOA; nobody_sign=YZ972236148628054016YZkLSS9nOA; captcha_sid=YZ972236215885279232YZCWfyzGur; loc_dfp=7a37a754bff16776675ae643c3eb466b; yz_log_ftime=1651840761215; yz_log_uuid=4979a494-89ab-2953-a3b9-59f5535dea7c`,
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
    $notify("吊毛14", "dm4", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

