const DIALOG_ID = "CybotCookiebotDialog";
const UNDERLAY_ID = "CybotCookiebotDialogBodyUnderlay";

function hide(id: string) {
	const el = document.getElementById(id);
	console.log(`[cookiebot] hide "${id}" — element found:`, !!el);
	if (el) el.style.setProperty("display", "none", "important");
}

function show(id: string) {
	const el = document.getElementById(id);
	console.log(`[cookiebot] show "${id}" — element found:`, !!el);
	if (el) el.style.removeProperty("display");
}

console.log("[cookiebot] script loaded — hiding banner");
hide(DIALOG_ID);
hide(UNDERLAY_ID);

document.addEventListener("intro:complete", () => {
	console.log("[cookiebot] intro:complete received — showing banner");
	show(DIALOG_ID);
	show(UNDERLAY_ID);
}, { once: true });
