
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `Cookie: trace_sdk_context_pv_id=/wscump/checkin/result~141ec386-4c04-4d6f-bd71-a8cd52b6dae1; Hm_lpvt_679ede9eb28bacfc763976b10973577b=1651284223; Hm_lvt_679ede9eb28bacfc763976b10973577b=1651126767,1651144405,1651242086; yz_log_seqb=1651284032859; yz_log_seqn=61; _kdt_id_=97284269; entry=3; csrf-secret=hAPxbTWzIMthWMvtCW; csrf-token=abSgxxVAa4-riJdlunwdWvxVOjS02D/q4uIRSs=; yz_ep_page_track=jaWcawZtJoXmLyIuIvtVwA%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; open_token={"accessToken":"e67db484e92a7374ba87fc38e1d724","expires":604799,"scope":"item trade user utility shop item_category user_advanced trade_virtual pay_qrcode coupon present_advanced reviews courier notice_center","expiresRemind":604799}; dfp=dc8ede15fd6be9e156b4bb95a924509a; rdfp=dc8ede15fd6be9e156b4bb95a924509a; loc_dfp=44b4fa7956cb10c382b0a2812b81b59c; _efmdata=tRmBWifPb6XWrROqkJxBmxAPUAITtMvERF3J8SbAuahRT3j%2FEBgal%2B57djFK1qhFvz8mLdhIO0TruxbFYlubXZnGewGhk7UX6d%2Fl%2Ba%2BI7ds%3D; _exid=%2FwCbzSV0akUhpGAMwaUxuEswcT7k6dxCHLMaFNEEVlQ1DA%2FyiFzsGIQoXAm2jGPqci%2BzG7lZ3rFJSRFrUqJxJA%3D%3D; ec=CfDKs6Ue-1651126762735-0a990449fab4a-1679018923; yz_fp_hash=65e7318fa0f5c157f3c122ab0271d50c; yz_log_ftime=1651126760704; yz_log_uuid=7a9b1d3a-c8c1-7a99-dee7-6c7f490983de; KDTSESSIONID=YZ969241401866469376YZ5gujqojz; nobody_sign=YZ969241401866469376YZ5gujqojz; KDTWEAPPSESSIONID=YZ969241174648287232YZzTJ4BzZI`,
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
    $notify("元初18658610114", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
