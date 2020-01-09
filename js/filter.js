//////////////////////////////////////////////

$(function(){	
	$(".s1 select").niceSelect();

	var Scrollbar = window.Scrollbar;

	var scrollOptions = {
		thumbMinSize: 30,
	};

	Scrollbar.init(document.querySelector("#cb_1"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_2"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_3"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_4"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_5"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_6"), scrollOptions);
	Scrollbar.init(document.querySelector("#cb_7"), scrollOptions);	

	//	$(".s1-chosen__item:nth-child(4) li").hide();

	function checkCb(inp){
		var selector = inp[0].localName;
		var blockId = +inp.parents(".s1-block").attr("blockid");
		var chosenItem = $(".s1-chosen__item").eq(blockId);		
		var chosenItemList = chosenItem.find(".s1-chosen__item-list");		
		if(selector == "select"){
			var checkedText = inp.val();
			var selectId = inp.parent("div").index();
			if(checkedText){
				if(!$(".s1-chosen__item:nth-child(4)").hasClass("s1-chosen__item_visible")){
					$(".s1-chosen__item:nth-child(4)").addClass("s1-chosen__item_visible");
				}
				chosenItemList.find("li").eq(selectId).show().find("span").text(checkedText);			
			}
			else {				
				chosenItemList.find("li").eq(selectId).hide();				
				if(chosenItemList.find("li:nth-child(1)").is(":hidden") && chosenItemList.find("li:nth-child(2)").is(":hidden")){
					$(".s1-chosen__item:nth-child(4)").removeClass("s1-chosen__item_visible");
				}	
			}
		} else {
			var checkedText = inp.next().next().text();
			var checkId = inp.parents("li").index();
			//console.log(checkId);





			if(inp.prop("checked")){

				var inpUl = inp.parents("ul");
				if(!inpUl.hasClass("s1-switches__list")){
					if(checkId != 0){
						var allInput = inpUl.find("li:nth-child(1) input");
						if(allInput.is(":checked")){
							inpUl.find("li:nth-child(1) input").click();
						}
					} else {
						inpUl.find("li:not(:nth-child(1)) input").each(function(){
							if($(this).is(":checked")){
								$(this).click();
							}
						});
					}
				}




				if(!chosenItem.hasClass("s1-chosen__item_visible")){
					chosenItem.addClass("s1-chosen__item_visible");
				}
				chosenItemList.append("<li><a href='#'>" + checkedText + "</li></a>");
			} else {
				chosenItemList.find("a").each(function(){
					if($(this).text() == checkedText){
						$(this).parent("li").remove();
					}
				});
			}
		}

		var a = 0;
		if(selector == "select"){
			$(".s1-select").each(function(){				
				if($(this).val()){
					a++;
				}
			});
		} else {
			inp.parents("ul").find("input[type='checkbox']").each(function(){
				if($(this).prop("checked")) a++;
			});	
		}
		if(!a){
			chosenItem.removeClass("s1-chosen__item_visible");
		}
	}	


	$(".s1-checkbox input[type='checkbox'], .s1-switches__list input[type='checkbox'], select.s1-select").on("change", function() {
		checkCb($(this));
	});

	$(".s1-checkbox input[type='checkbox'], .s1-switches__list input[type='checkbox'], select.s1-select").each(function(){
		checkCb($(this));

	});

	$(".s1-chosen__item-list").on("click", "a", function(e){
		e.preventDefault();
		var link = $(this);
		var linkId = link.parent("li").index();
		var linkText = link.text();
		var blockId = +link.parents(".s1-chosen__item").index();
		var targetBlock = $(".s1-block[blockid=" + blockId + "]");
		var inputs = targetBlock.find("input[type='checkbox']");
		inputs.each(function(){
			if($(this).next().next().text() == linkText){
				$(this).click();
			}
		});
		if(!inputs.length){
			var li = link.parent("li");	
			li.hide();	
			$(".s1-years > *:nth-child("+ (++linkId) +") .s1-select").val("").niceSelect("update");		
			if(li.siblings().is(":hidden")){
				$(".s1-chosen__item:nth-child(4)").removeClass("s1-chosen__item_visible");
			}			
		}
	});

	$(".search-filter").keyup(function (e) {
		let searchText = e.target.value.toLowerCase();
		if (searchText === '') {
			$(e.target.parentNode.parentNode).find('li').show();
			return;
		}

		let spans = $(e.target.parentNode.parentNode).find('span');
		console.log(spans);
        for (let i=0;i<spans.length;i++) {
        	if (spans[i].innerText !== '') {
        		if (spans[i].innerText.toLowerCase().indexOf(searchText) === -1) {
					$(spans[i].parentNode.parentNode).hide();
				} else {
        			$(spans[i].parentNode.parentNode).show();
				}
			}
		}
    })
});

//////////////////////////////////////////////