
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~84cf0cf3-e693-4179-8954-b84dabe78ffa; yz_log_seqb=1652106928197; yz_log_seqn=30; _kdt_id_=97284269; dfp=e1b7f1d699d664786335ca23d2110931; rdfp=e1b7f1d699d664786335ca23d2110931; KDTSESSIONID=YZ973352533705818112YZDOu7ly0M; nobody_sign=YZ973352533705818112YZDOu7ly0M; captcha_sid=YZ973352650741309440YZN4SzJ8vE; loc_dfp=47d6db0ded76d75e82f993b41adb1658; yz_log_ftime=1652106928153; yz_log_uuid=8928d958-1d8d-dfb6-3d11-d796bdab1d1b`,
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
    $notify("林仔3", "19925847164", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

