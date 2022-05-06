
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~21803a1d-3fbd-400b-b3d9-bc342d6ca8e6; yz_log_seqb=1651819077192; yz_log_seqn=36; KDTSESSIONID=YZ972145198878085120YZlsYaafe4; _kdt_id_=97284269; nobody_sign=YZ972145198878085120YZlsYaafe4; captcha_sid=YZ972145266827911168YZ09r9IHQl; dfp=68d5d6abf875fa2376315e2fb06a81ef; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651819077119; yz_log_uuid=e4600472-b234-f76f-3ab8-a965715048eb`,
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

