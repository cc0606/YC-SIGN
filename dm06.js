
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~cae88088-59f3-4aba-8581-a359d7b010bd; yz_log_seqb=1651819183378; yz_log_seqn=45; _kdt_id_=97284269; KDTSESSIONID=YZ972145644361613312YZs8E3yfEF; nobody_sign=YZ972145644361613312YZs8E3yfEF; captcha_sid=YZ972145709071515648YZhm6nuFWc; dfp=399fc438a64867cafa2d00b9a5a83931; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651819183329; yz_log_uuid=b8e4bca1-0b81-2c21-e381-a0bd0629aedc`,
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
    $notify("吊毛6", "18148950630 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

