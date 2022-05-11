
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~267f867a-d35f-45ae-abb4-ea937d75c80f; yz_log_seqb=1652199290900; yz_log_seqn=18; _kdt_id_=97284269; KDTSESSIONID=YZ973739927160123392YZOm7vETlO; nobody_sign=YZ973739927160123392YZOm7vETlO; captcha_sid=YZ973740108708143104YZcwX7EQqy; dfp=b2e2493da2dbc0e5a6b80e21c330a5cb; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199290458; yz_log_uuid=0d9041b1-4357-52b8-5804-1db5e0dee758`,
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
    $notify("冻冻8", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

