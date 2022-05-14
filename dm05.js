
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~7a7856df-9f2a-43af-9ea7-54af3f311c1c; yz_log_seqb=1652518823903; yz_log_seqn=42; _kdt_id_=97284269; KDTSESSIONID=YZ975080149261070336YZriREuxzB; nobody_sign=YZ975080149261070336YZriREuxzB; captcha_sid=YZ975080220924514304YZ6fibTHOh; dfp=493b3d344e1af61884bea80d193a65aa; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1652518823837; yz_log_uuid=019383b3-6abf-26d8-e233-d44f482d68ff`,
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
    $notify("吊毛5", "18148950898 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

