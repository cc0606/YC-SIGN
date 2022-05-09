
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~1f14768e-959f-4dd0-8295-b4e0c7680f0f; yz_log_seqb=1652110701486; yz_log_seqn=67; dfp=e1b7f1d699d664786335ca23d2110931; rdfp=e1b7f1d699d664786335ca23d2110931; _kdt_id_=97284269; KDTSESSIONID=YZ973368359986847744YZsQOIkOiN; nobody_sign=YZ973368359986847744YZsQOIkOiN; captcha_sid=YZ973368552129982464YZXZEfxnN0; loc_dfp=47d6db0ded76d75e82f993b41adb1658; yz_log_ftime=1652110701425; yz_log_uuid=cc35eeb6-2010-a7ae-a099-a16639208066`,
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
    $notify("林仔6", "13352832227", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

