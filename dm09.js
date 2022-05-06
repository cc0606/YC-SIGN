
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~93f2aa0e-5b24-49d1-8870-40cc03af4547; yz_log_seqb=1651819656567; yz_log_seqn=48; _kdt_id_=97284269; KDTSESSIONID=YZ972147628866416640YZHffBcBq2; nobody_sign=YZ972147628866416640YZHffBcBq2; captcha_sid=YZ972147710343856128YZfAIYwp3n; dfp=d8f3aff21fd6c7a205ce6ffcb5bf5a7f; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651819656518; yz_log_uuid=4ad13f5e-cbf4-25aa-8fe4-db5a3d72b6d5`,
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
    $notify("吊毛9", "14748667823 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

