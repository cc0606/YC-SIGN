
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~461310a8-355e-4b16-bc35-e821750fb38f; yz_log_seqb=1652973421066; yz_log_seqn=14; _kdt_id_=97284269; yz_ep_page_track=Jt1P3cQA3P43SM9Jknc2gw%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=ad803814c98ba394dc7f6b6b969f0e3385479ea9; _efmdata=iVr0oye6x3jYbLyGTZAoBTdQC9xjg0i5dcgkqrzmd819hFUk7vrOogR%2FUmknKuIBbgRlsya6tkK06j3gSzgxrhFYgkl6OCB9SQu9fgTLQ3c%3D; _exid=RbNcpnHWch3mkgfAeU1ACueCK6bX84BA2dsJx9UyCEq2L%2Ffmgw7T6ln%2By1OasX%2Fn%2F8p02xcDXfemhtyAqTayjA%3D%3D; ec=nXXFZ7RJ-1651145371195-aaee37c13f564-532273528; yz_fp_hash=6630ae5665e087f366e51608a467172b; yz_log_ftime=1652973420843; yz_log_uuid=1801cafa-4123-0167-2f0d-10ba6e4951a4; KDTSESSIONID=YZ969319445971836928YZtx0Cic2F; nobody_sign=YZ969319445971836928YZtx0Cic2F`,
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
    $notify("W6", "元初18658696822", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
