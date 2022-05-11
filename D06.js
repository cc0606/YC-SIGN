
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~b0b58f79-85f1-4e1d-a099-0debc9fc2b02; yz_log_seqb=1652199017863; yz_log_seqn=25; KDTSESSIONID=YZ973738782457806848YZlCCxMPRR; _kdt_id_=97284269; nobody_sign=YZ973738782457806848YZlCCxMPRR; captcha_sid=YZ973738904247758848YZXP684g9N; dfp=af842671047757983859f82692aff6f5; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199017473; yz_log_uuid=c6b1910d-1a86-87fc-447f-c7e84e10c9fd`,
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
    $notify("冻冻6", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

