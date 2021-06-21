export function openMenu() {
	document.getElementById('menuContent').style.display = 'block';
	document.getElementById('openIcon').style.display = 'none';
	document.getElementById('closeIcon').style.display = 'block';
	document.getElementById('footer').style.display = 'none';
	document.getElementById('content').style.display = 'none';
	// document.getElementById('stars').style.display = 'none';
	// document.getElementById('stars2').style.display = 'none';
	// document.getElementById('stars3').style.display = 'none';
	// document.getElementById('stars4').style.display = 'block';
	// document.getElementById('stars5').style.display = 'block';
	// document.getElementById('stars6').style.display = 'block';
}

export function closeMenu() {
	document.getElementById('menuContent').style.display = 'none';
	document.getElementById('openIcon').style.display = 'block';
	document.getElementById('closeIcon').style.display = 'none';
	document.getElementById('footer').style.display = 'block';
	document.getElementById('content').style.display = 'block';
	// document.getElementById('stars').style.display = 'block';
	// document.getElementById('stars2').style.display = 'block';
	// document.getElementById('stars3').style.display = 'block';
	// document.getElementById('stars4').style.display = 'none';
	// document.getElementById('stars5').style.display = 'none';
	// document.getElementById('stars6').style.display = 'none';
}
