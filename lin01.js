
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~1f28ebc7-53a4-4b56-9cae-4e980ba31d4c; yz_log_seqb=1651422230617; yz_log_seqn=58; dfp=e1b7f1d699d664786335ca23d2110931; rdfp=e1b7f1d699d664786335ca23d2110931; _kdt_id_=97284269; KDTSESSIONID=YZ970480703028031488YZPW3E4oXO; nobody_sign=YZ970480703028031488YZPW3E4oXO; captcha_sid=YZ970481435076677632YZk5sCfXB6; loc_dfp=47d6db0ded76d75e82f993b41adb1658; yz_log_ftime=1651422230524; yz_log_uuid=f07c91de-7ea3-5fdb-98d6-d589f74a74f3`,
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
    $notify("林仔1", "13602437970", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

