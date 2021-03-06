
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~0e2ad1cf-0a69-4914-8206-55fb6de6c5f3; yz_log_seqb=1651819391545; yz_log_seqn=46; _kdt_id_=97284269; KDTSESSIONID=YZ972146517410504704YZUWYuFk6p; nobody_sign=YZ972146517410504704YZUWYuFk6p; captcha_sid=YZ972146573001584640YZxqpDepOR; dfp=77ece53b98fec7511f541919fe678aef; loc_dfp=b6d6a23e3e2b48613298839dae2ccbfc; yz_log_ftime=1651819391494; yz_log_uuid=f5053519-90cb-e741-be87-857d930514b0`,
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
    $notify("吊毛7", "13580511664 ", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

