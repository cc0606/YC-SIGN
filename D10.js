
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~ee0abf3e-f9e7-4a27-a195-19535dbd6e75; yz_log_seqb=1652199529144; yz_log_seqn=20; _kdt_id_=97284269; KDTSESSIONID=YZ973740926088015872YZ3GorwHIJ; nobody_sign=YZ973740926088015872YZ3GorwHIJ; captcha_sid=YZ973741092631683072YZoA1clPZa; dfp=bb7a5f110ee174642fcd0041b82ce7e0; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199528734; yz_log_uuid=d25a0d23-2d9e-9c8c-e3aa-5647616fc025`,
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
    $notify("冻冻10", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

