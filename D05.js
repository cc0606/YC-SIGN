
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~37ee3472-31df-40b2-a8ca-4bd884f49fa3; yz_log_seqb=1652198848525; yz_log_seqn=34; KDTSESSIONID=YZ973738072776695808YZ3baA3iWC; _kdt_id_=97284269; nobody_sign=YZ973738072776695808YZ3baA3iWC; captcha_sid=YZ973738150775910400YZggHoEd6b; dfp=e89e6b04c45e3666dee0d7f6dbc38d09; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652198848220; yz_log_uuid=b68bcbcb-745f-d449-63e1-7385f7c5efe2`,
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
    $notify("冻冻5", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

