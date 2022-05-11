
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : ` trace_sdk_context_pv_id=/wscuser/membercenter~c995315a-157f-46a8-9cba-21ecc91674ab; yz_log_seqb=1652199151024; yz_log_seqn=19; _kdt_id_=97284269; KDTSESSIONID=YZ973739339636183040YZHGjCsEmu; nobody_sign=YZ973739339636183040YZHGjCsEmu; captcha_sid=YZ973739534138200064YZhPhpZIjG; dfp=f7b832eb3de6b098e5b2ebbd74cafccf; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652199150614; yz_log_uuid=fcf8e924-4ff5-cb54-26c8-8625336708d6`,
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
    $notify("冻冻7", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

