
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~f01daa1c-d9a9-41a3-9259-e62c90fbdb4c; yz_log_seqb=1651818953299; yz_log_seqn=44; _kdt_id_=97284269; KDTSESSIONID=YZ972144679220768768YZhDyvPaF5; nobody_sign=YZ972144679220768768YZhDyvPaF5; captcha_sid=YZ972144806159659008YZ6LJswdqE; dfp=1490aaae8009b8d9861262194c4525e9; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651818953234; yz_log_uuid=ae67ddbd-b8fb-2c68-93b7-7466ffb21b0f`,
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

