
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~d8b44d6a-7189-401c-869f-0ca459b81774; yz_log_seqb=1652198493994; yz_log_seqn=26; _kdt_id_=97284269; KDTSESSIONID=YZ973736584489136128YZwbbYC1EO; nobody_sign=YZ973736584489136128YZwbbYC1EO; captcha_sid=YZ973736676172910592YZnS9ztmw8; dfp=3376f551764adab4938a7ed0d3efbc6a; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652198493725; yz_log_uuid=e5fa1b2e-dcaa-f30b-130e-cbd11428bc58`,
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
    $notify("冻冻2", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

