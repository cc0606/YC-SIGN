
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~23d3de67-c68c-4dff-91c4-9f342b9874c2; yz_log_seqb=1652518736923; yz_log_seqn=47; _kdt_id_=97284269; KDTSESSIONID=YZ975079784485519360YZQs21zAMJ; nobody_sign=YZ975079784485519360YZQs21zAMJ; captcha_sid=YZ975079852625080320YZScmzluxA; dfp=54d96a7a030120de2a0639f3d3db5d09; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1652518736855; yz_log_uuid=4a44c2eb-5d47-60cb-8c5c-4203c0176dbf`,
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
    $notify("吊毛4", "18148951820", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

