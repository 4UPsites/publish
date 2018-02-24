/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-pedido_em_analise': '&#xe965;',
		'icon-email': '&#xe959;',
		'icon-rede-p2': '&#xe95c;',
		'icon-whatsapp': '&#xe95e;',
		'icon-relogio': '&#xe957;',
		'icon-seta-baixo': '&#xe914;',
		'icon-seta-cima': '&#xe915;',
		'icon-compartilhar': '&#xe929;',
		'icon-ic-menu': '&#xe906;',
		'icon-flecha_direita': '&#xe92b;',
		'icon-flecha_esquerda': '&#xe92c;',
		'icon-close': '&#xe903;',
		'icon-face': '&#xe904;',
		'icon-instagran': '&#xe907;',
		'icon-rede-p': '&#xe912;',
		'icon-twitter': '&#xe91a;',
		'icon-vimeo': '&#xe91b;',
		'icon-youtube': '&#xe91c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
