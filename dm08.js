
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~16e05d37-6b99-4efe-b65b-b600e470316d; yz_log_seqb=1652518910776; yz_log_seqn=44; KDTSESSIONID=YZ975080513725112320YZeIKAafK5; _kdt_id_=97284269; nobody_sign=YZ975080513725112320YZeIKAafK5; captcha_sid=YZ975080569578340352YZZyS6gkQL; dfp=0ea9d4794752ed885094b0bbfea75998; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1652518910707; yz_log_uuid=1082e5ea-c41e-7472-9542-abf35ba30a0a`,
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
    $notify("吊毛8", "13119571225 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

