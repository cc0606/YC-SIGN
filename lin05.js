
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~4c0e1819-9c0f-4c08-8b35-52e46b4b37ef; yz_log_seqb=1651423889929; yz_log_seqn=36; dfp=e1b7f1d699d664786335ca23d2110931; rdfp=e1b7f1d699d664786335ca23d2110931; _kdt_id_=97284269; KDTSESSIONID=YZ970487663180746752YZKwcLVH2f; nobody_sign=YZ970487663180746752YZKwcLVH2f; captcha_sid=YZ970487718534127616YZprILBnsF; loc_dfp=47d6db0ded76d75e82f993b41adb1658; yz_log_ftime=1651423889856; yz_log_uuid=578ec14d-fb1a-629c-9ca0-027242f3c035`,
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
    $notify("林仔5", "13360025481", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

