
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~7d41f934-fca7-4ce9-94a6-7dd8fc63fc64; yz_log_seqb=1651840054086; yz_log_seqn=88; dfp=cdf62d8abb5e92f97c1ccc4c28376f1c; rdfp=cdf62d8abb5e92f97c1ccc4c28376f1c; _kdt_id_=97284269; KDTSESSIONID=YZ972233182415097856YZ7NSZCxoS; nobody_sign=YZ972233182415097856YZ7NSZCxoS; captcha_sid=YZ972233486752755712YZVe71vcDj; loc_dfp=7a37a754bff16776675ae643c3eb466b; yz_log_ftime=1651840053969; yz_log_uuid=b65a3f27-481b-aa2f-ef81-182d42a3974d`,
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
    $notify("吊毛12", "diaomao2", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

