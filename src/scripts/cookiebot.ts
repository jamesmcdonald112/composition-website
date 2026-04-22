const DIALOG_ID = "CybotCookiebotDialog";
const UNDERLAY_ID = "CybotCookiebotDialogBodyUnderlay";

function hide(id: string) {
	const el = document.getElementById(id);
	if (el) el.style.setProperty("display", "none", "important");
}

function show(id: string) {
	const el = document.getElementById(id);
	if (el) el.style.removeProperty("display");
}

// On first visit, hide the banner immediately and reveal it once the intro signals completion
if (!sessionStorage.getItem("intro-seen")) {
	hide(DIALOG_ID);
	hide(UNDERLAY_ID);

	document.addEventListener("intro:complete", () => {
		show(DIALOG_ID);
		show(UNDERLAY_ID);
	}, { once: true });
}
