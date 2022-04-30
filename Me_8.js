
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://shop97476437.youzan.com/wscump/checkin/checkinV2.json?checkinId=1999740&kdt_id=97284269`;
const method = `GET`;
const headers = {
'Cookie' : `trace_sdk_context_pv_id=/wscump/checkin/result~9cf970df-0c1f-4a5b-abfc-351f62c59631; yz_log_seqb=1651290884177; yz_log_seqn=18; _kdt_id_=97284269; yz_ep_page_track=2urwMABYxvnvp3TE9e7xUQ%3D%3D; yz_ep_page_type_track=M9LzzsFr8gNxs8%2Ffk6DNDg%3D%3D; dfp=63b9388f1648b3fbdead0bdf7dd5312d; loc_dfp=c1a039f013b8f7ff2b0c180992b970a6; rdfp=63b9388f1648b3fbdead0bdf7dd5312d; _efmdata=mxCcp8j%2FiMWKG0vB1Nm%2F4pXFPzPyS84z9WAlfhrT%2F0gjTsnRSgIlf9nJ8iYsIClM7PWDEgName9hbNa4YIt2vAsHs6KhCTCyXWwimkdQIfQ%3D; _exid=jtMgosk1TAhXGMvf8ovjpeKtMvjRnOQH07ORcCDZgcG5LuRtcwnDP4NMEZHUSosMxZRQpCQORxZkaRYMXjv1VA%3D%3D; yz_fp_hash=00cf7c6fcab4bba42461a5d9abacfe12; ec=4rsxiorU-1651242277857-b41ca3af46c88-1670831277; yz_log_ftime=1651242275303; yz_log_uuid=38b0237d-e555-c774-0fa9-3be2335361a0; KDTSESSIONID=YZ969725908819456000YZdmsldwzy; nobody_sign=YZ969725908819456000YZdmsldwzy; KDTWEAPPSESSIONID=YZ965995138199334912YZosLawcuO`,
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
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
