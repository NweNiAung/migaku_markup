$(function(){

//モーダルウィンドウを出現させるクリックイベント
$("#modal-open").click(function(){

	//オーバーレイを出現させる
	$("body").append('<div id="modal-overlay"></div>');
	$("#modal-overlay").fadeIn("slow");
	$('#menuArea').fadeOut(500,function(){       //フェードアウトの時間設定（単位、ミリ秒）
		fadeFlag = 0;                          //フェード処理終了として、フラグに0を入れる
	});

	//コンテンツをセンタリングする
	centeringModalSyncer();

	//コンテンツをフェードインする
	$("#modal-content").fadeIn("slow");

	//[#modal-overlay]、または[#modal-close]をクリックしたら…
	$("#modal-overlay,#modal-close").unbind().click(function(){
	

		//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
		$("#modal-content,#modal-overlay").fadeOut("slow",function(){

			//[#modal-overlay]を削除する
			$('#modal-overlay').remove();

		});

	});

});

//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
$(window).resize(centeringModalSyncer);

	//センタリングを実行する関数
	function centeringModalSyncer(){

		//画面(ウィンドウ)の幅、高さを取得
		var w = $(window).width();
		var h = $(window).height();

		//コンテンツ(#modal-content)の幅、高さを取得
		var cw = $("#modal-content").outerWidth({margin:true});
		var ch = $("#modal-content").outerHeight({margin:true});

		//センタリングを実行する
		$("#modal-content").css({"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"})

	}

});
