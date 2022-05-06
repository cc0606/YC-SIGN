
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~074f4498-83d7-4166-9573-e8a9b3c50383; yz_log_seqb=1651840625540; yz_log_seqn=54; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; KDTSESSIONID=YZ972235579055030272YZSWffeEC6; _kdt_id_=97284269; nobody_sign=YZ972235579055030272YZSWffeEC6; captcha_sid=YZ972235641850376192YZ3IUpzqnw; loc_dfp=7a37a754bff16776675ae643c3eb466b; yz_log_ftime=1651840625414; yz_log_uuid=a11527a1-9c10-9543-1ece-6d6050d6b765`,
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
    $notify("吊毛13", "dm3", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

