
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~f47e9428-159a-4c8c-bd62-eb39e68745f6; yz_log_seqb=1651818775973; yz_log_seqn=51; _kdt_id_=97284269; KDTSESSIONID=YZ972143935473790976YZYZ8U823L; nobody_sign=YZ972143935473790976YZYZ8U823L; captcha_sid=YZ972144015059750912YZgsytPflr; dfp=ac4882478b59b1f41670ee13f972665e; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651818775925; yz_log_uuid=4151f2fc-f4ee-bbb0-b0b8-dfba6d453f98`,
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
    $notify("吊毛3", "18578756210", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

