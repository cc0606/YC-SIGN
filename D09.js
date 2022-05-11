
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~ff604282-fc19-4cb5-8a09-6a619c6d15a7; yz_log_seqb=1652199417098; yz_log_seqn=20; _kdt_id_=97284269; KDTSESSIONID=YZ973740456801095680YZWD0fxWxp; nobody_sign=YZ973740456801095680YZWD0fxWxp; captcha_sid=YZ973740611852029952YZ6LRwZxo6; dfp=f4bc068fd5224fbebe3fbfdcefb3aac6; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199416685; yz_log_uuid=c5190c0a-da30-15a4-1cf0-bb7f09666786`,
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
    $notify("冻冻9", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

