var btnmenu = document.querySelector('#menu');
btnmenu.addEventListener('click', abrirmenu);

function abrirmenu(){
    switch(btnmenu.className){
        case 'glyphicon glyphicon-menu-hamburger':
            document.querySelector('#nav-menu').style.display = 'block';
            /*document.querySelector('#nav-menu').style.WebkitTransition = 'width 5s';
	        document.querySelector('#nav-menu').style.transition = '2s';*/
            document.querySelector('#div-menu').style.marginLeft = '2%';
            document.querySelector('#menu-search').style.marginRight = '2%';
            document.querySelector('#menu-search').style.width = '100%';
            document.querySelector('#menu-search').style.display = 'inherit';
            document.querySelector('#menu-search').style.margin = '0 4% 0 0';
            document.querySelector('.form-control').style.padding = '2% 1% 2% 0';
            document.querySelector('#menu').className = 'glyphicon glyphicon-arrow-left';
            document.querySelector('#navul').style.margin = '3% 0 0 30%';
            break;
        case 'glyphicon glyphicon-arrow-left':
            document.querySelector('#nav-menu').style.display = 'none';
            document.querySelector('#div-menu').style.marginLeft = '4%';
            document.querySelector('#menu-search').style.marginRight = '4%';
            document.querySelector('#menu-search').style.width = '80%';
            document.querySelector('#menu-search').style.display = '-webkit-inline-box';
            document.querySelector('#menu-search').style.margin = '0 4% 0 4%';
            document.querySelector('.form-control').style.padding = '2.8% 1% 2.8% 0';
            document.querySelector('#menu').className = 'glyphicon glyphicon-menu-hamburger';
            document.querySelector('#navul').style.margin = '3% 0 0 0';
            break;
        default:
            console.log('No funciona!');
            break;
    }
}