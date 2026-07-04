// ==UserScript==
// @name        AmbTV MyList
// @namespace        http://tampermonkey.net/
// @version        0.1
// @description        AbemaTV マイリスト登録のコピーツール
// @author        AbemaTV User
// @match        https://abema.tv/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=abema.tv
// @grant        none
// @updateURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// @downloadURL        https://github.com/personwritep/AmbTV_MyList/raw/main/AmbTV_MyList.user.js
// ==/UserScript==

let links=[]; // マイリスト登録のコピー用の配列

let target=document.querySelector('head > title');
let monitor=new MutationObserver(list_check);
monitor.observe(target, { childList: true });

list_check();


function list_check(){
    if(window.location.pathname=='/mylist'){
        let retry0=0;
        let interval0=setInterval(wait_target0, 40);
        function wait_target0(){
            retry0++;
            if(retry0>100){ // リトライ制限 100回 4secまで
                clearInterval(interval0); }
            let list_ul=document.querySelector('.com-pages-mylist-MylistContentItemList');
            if(list_ul){
                clearInterval(interval0);
                main(list_ul); }}}}


function main(list_ul){

    let panel=
        '<div class="my_p">'+
        '<button class="button1 com-shared-mypage-MypageSidebar__item">マイリストを保存</button>'+
        '<button class="button2 com-shared-mypage-MypageSidebar__item">マイリストを読込む</button>'+
        '<input class="button2_file" type="file" style="display: none">'+
        '</div>';

    let sidebar=document.querySelector('.com-shared-mypage-MypageSidebar');

    if(sidebar && !document.querySelector('.my_p')){
        sidebar.insertAdjacentHTML('beforeend', panel); }

    let button1=document.querySelector('.button1');
    let button2=document.querySelector('.button2');
    let button2_file=document.querySelector('.button2_file');



    button1.onclick=function(){
        links=[]; // 配列初期化

        let list_link=list_ul.querySelectorAll('.com-my-list-MyListBaseItem > a');
        for(let k=0; k<list_link.length; k++){
            let link_href=list_link[k].href;
            links.push(link_href); }


        let write_json=JSON.stringify(links); // 記録配列 links を書出す
        let blob=new Blob([write_json], {type: 'application/json'});

        let a_elem=document.createElement('a');
        a_elem.href=URL.createObjectURL(blob);
        a_elem.download='AmbMyList.json'; // 保存ファイル名
        a_elem.click();
        URL.revokeObjectURL(a_elem.href); }



    button2.onclick=function(){
        links=[]; // 配列初期化

        alert(
            " 🔴 「AmbMyList(n).json」のファイルを読込んでください\n"+
            "　　(n)は同名ファイルがある場合の連番です");
        button2_file.click(); }

    button2_file.addEventListener("change", function(){
        if(!(button2_file.value)) return; // ファイルが選択されない場合
        let file_list=button2_file.files;
        if(!file_list) return; // ファイルリストが選択されない場合
        let file=file_list[0];
        if(!file) return; // ファイルが無い場合

        let file_reader=new FileReader();
        file_reader.readAsText(file);
        file_reader.onload=function(){
            let data_in=JSON.parse(file_reader.result);
            links=data_in; // 記録配列  links を上書き
            let write_json=JSON.stringify(links);

            list_disp(); }
    });



    function list_disp(){
        let links_disp=
            '<div class="links_panel">';

        for(let k=0; k<links.length; k++){
            links_disp+=
                '<a href="'+ links[k] +'" target="_blank">'+getdouble(k+1)+'　'+ links[k] +'</a>'; }

        links_disp+=
            '<style>'+
            '.links_panel { position: fixed; bottom: 20px; right: 10px; '+
            'font: normal 16px/20px Meiryo; color: #fff; background: #000; border: 2px solid #fff; '+
            'padding: 10px; width: 385px; height: 60vh; overflow-y: scroll; overflow-x: hidden; } '+
            '.links_panel a { display: inline-block; padding: 8px 4px; width: 350px; overflow: hidden; '+
            'white-space: nowrap; text-overflow: ellipsis; text-decoration: none; } '+
            '.links_panel a:hover { background: #444; } '+
            '</style></div>';

        if(document.querySelector('.links_panel')){
            document.querySelector('.links_panel').remove(); }
        document.body.insertAdjacentHTML('beforeend', links_disp);


        function getdouble(number){
            return ("0" + number).slice(-2); }


        let lines=document.querySelectorAll('.links_panel a');
        for(let k=0; k<lines.length; k++){
            lines[k].onclick=function(){
                if(lines[k].hasAttribute('style')){
                    lines[k].removeAttribute('style'); }
                else{
                    lines[k].style.outline='1px solid #2196f3'; }}}

    } // list_disp()

} // main()
