
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscuser/membercenter~956226ae-eadb-4e6f-9096-f9451540751d; yz_log_seqb=1652973103566; yz_log_seqn=18; _kdt_id_=97284269; yz_ep_page_track=jaWcawZtJoXmLyIuIvtVwA%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=a00205d858cf40cb98a81e816501589dec9f6e7f; _efmdata=tRmBWifPb6XWrROqkJxBmxAPUAITtMvERF3J8SbAuahRT3j%2FEBgal%2B57djFK1qhFwPOZ%2BpTXiJ3benc9tVCBK2%2BlJa7nF6%2BWFFsEg34kCi4%3D; _exid=ifOxrt%2BlbecbgNjkBM7CwBziS1VzzjNSBnlOokq8KB8q66iSuws0ulQ0c8K3ILAEngNP5rHw%2BvVj8ceXGUSSaA%3D%3D; ec=CfDKs6Ue-1651126762735-0a990449fab4a-1679018923; yz_fp_hash=02d7ec414d343bedefe53dbc2010f1c2; yz_log_ftime=1652973103337; yz_log_uuid=359058b5-deb0-bb67-7c2f-c2b942164c71; entry=3; KDTSESSIONID=YZ969241401866469376YZ5gujqojz; nobody_sign=YZ969241401866469376YZ5gujqojz; KDTWEAPPSESSIONID=YZ969241174648287232YZzTJ4BzZI`,
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
    $notify("W3", "元初18658610114", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
