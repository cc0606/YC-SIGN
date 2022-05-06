
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~547f8360-458a-47a9-affa-62da81386939; yz_log_seqb=1651819803602; yz_log_seqn=44; _kdt_id_=97284269; KDTSESSIONID=YZ972148245712785408YZSlCyNuFB; nobody_sign=YZ972148245712785408YZSlCyNuFB; captcha_sid=YZ972148323353546752YZDdAaVYMw; dfp=a74d11f677cb6c97e2a26e1e14754e27; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651819803552; yz_log_uuid=de5564a1-2e63-7896-aa62-681275cbb013`,
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
    $notify("吊毛10", "13660725171 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

