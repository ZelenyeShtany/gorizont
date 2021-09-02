var clients_div_expanded = 0;

var hidden_logos = [
    ["Компания Freshsu","Компания Freshsu","/ourclients/freshsu","width: 145px"],
    ["Студия танцев «Горец»","Студия танцев «Горец»","/ourclients/gorec"],
    ["Областная федерация каратэ шинкиокушинкай","Областная федерация каратэ шинкиокушинкай","/ourclients/karate"],
    ["ОО «Алматинский областной Русский культурный центр»","ОО «Алматинский областной Русский культурный центр»","/ourclients/kcrk"],
    ["КГУ «Специализированная детско-юношеская спортивная школа по национальным и конным видам спорта города Талдыкорган»","КГУ «Специализированная детско-юношеская спортивная школа по национальным и конным видам спорта города Талдыкорган»","/ourclients/sportshkola"],
    ["Казахстанский котельный завод","Казахстанский котельный завод","/ourclients/teplo-standart"],
    ["Футбольный клуб «Жетысу»","Футбольный клуб «Жетысу»","/ourclients/zhetysu2"],
    ["Футбольная команда «Жетысу Чемпионс»","Футбольная команда «Жетысу Чемпионс»","/ourclients/zhetysu"]
];
var logos_were_expanded_at_least_once=0;
function toggle_expand()
{
    var logos = document.getElementsByClassName('clients-logos');
    if (clients_div_expanded == 0)
    {
	if (logos_were_expanded_at_least_once == 0) {
	 for (let i = 0; i < hidden_logos.length; i++) {
	     let img = document.createElement('img');
	     img.setAttribute("title",hidden_logos[i][0]);
	     img.setAttribute("alt",hidden_logos[i][1]);
	     img.setAttribute("src",hidden_logos[i][2]+".png");
	     if (hidden_logos[i].length == 4)
		 img.setAttribute("style",hidden_logos[i][3]);

	     let source = document.createElement('source');
	     source.setAttribute("type","image/avif");
	     source.setAttribute("srcset",hidden_logos[i][2]+".avif");

	     let picture = document.createElement('picture');
	     picture.appendChild(source);
	     picture.appendChild(img);
	     
	     logos[0].appendChild(picture);
	 }
	    logos_were_expanded_at_least_once = 1;
     }
	logos[0].style.maxHeight = '3000px';
	document.getElementsByClassName("showmore")[0].innerHTML = "Скрыть";
	clients_div_expanded = 1;
    }
    else
    {
	logos[0].style.maxHeight = '95px';
	document.getElementsByClassName("showmore")[0].innerHTML = "Показать еще";
	clients_div_expanded = 0;
    }
}


/// CSS-TRICKS https://css-tricks.com/using-css-transitions-auto-dimensions/
// This is the important part!

// function collapseSection(element) {
//   // get the height of the element's inner content, regardless of its actual size
//   var sectionHeight = element.scrollHeight;
  
//   // temporarily disable all css transitions
//   var elementTransition = element.style.transition;
//   element.style.transition = '';
  
//   // on the next frame (as soon as the previous style change has taken effect),
//   // explicitly set the element's height to its current pixel height, so we 
//   // aren't transitioning out of 'auto'
//   requestAnimationFrame(function() {
//     element.style.height = sectionHeight + 'px';
//     element.style.transition = elementTransition;
    
//     // on the next frame (as soon as the previous style change has taken effect),
//     // have the element transition to height: 0
//     requestAnimationFrame(function() {
//       element.style.height = 0 + 'px';
//     });
//   });
  
//   // mark the section as "currently collapsed"
//   element.setAttribute('data-collapsed', 'true');
// }

// function expandSection(element) {
//   // get the height of the element's inner content, regardless of its actual size
//   var sectionHeight = element.scrollHeight;
  
//   // have the element transition to the height of its inner content
//   element.style.height = sectionHeight + 'px';

//   // when the next css transition finishes (which should be the one we just triggered)
//   element.addEventListener('transitionend', function(e) {
//     // remove this event listener so it only gets triggered once
//     element.removeEventListener('transitionend', arguments.callee);
    
//     // remove "height" from the element's inline styles, so it can return to its initial value
//     element.style.height = null;
//   });
  
//   // mark the section as "currently not collapsed"
//   element.setAttribute('data-collapsed', 'false');
// }

// document.querySelector('#toggle-button').addEventListener('click', function(e) {
//   var section = document.querySelector('.section.collapsible');
//   var isCollapsed = section.getAttribute('data-collapsed') === 'true';
    
//   if(isCollapsed) {
//     expandSection(section)
//     section.setAttribute('data-collapsed', 'false')
//   } else {
//     collapseSection(section)
//   }
// });
