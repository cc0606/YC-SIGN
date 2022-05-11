
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~89f01cd2-d7b7-471e-91c3-feff152723d0; yz_log_seqb=1652198721417; yz_log_seqn=28; _kdt_id_=97284269; KDTSESSIONID=YZ973737539360673792YZhQFzCtHW; nobody_sign=YZ973737539360673792YZhQFzCtHW; captcha_sid=YZ973737674853470208YZbsTBUODM; dfp=f388a12911deb59d8138d8a5d65c7c73; loc_dfp=34157e3b76d40d2bd8841dfc2b48c47f; yz_log_ftime=1652198721096; yz_log_uuid=05f9867c-ef5c-9eab-977c-69259d96d5f7`,
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
    $notify("冻冻4", "19924384492", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});

