
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~77e6a255-4dd6-412a-abb5-9dd0ad37f53a; yz_log_seqb=1651422396087; yz_log_seqn=136; _kdt_id_=97284269; KDTSESSIONID=YZ970481397601148928YZYGBLsCld; nobody_sign=YZ970481397601148928YZYGBLsCld; captcha_sid=YZ970481443954421760YZPCZx3nhT; dfp=0025e603b45175c2eaec5765d2195521; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651422396023; yz_log_uuid=6fe5d00f-e9ad-1233-3b7e-1a90f3139f7f`,
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
    $notify("吊毛2", "18602010510", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

