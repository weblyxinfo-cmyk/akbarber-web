"use client";

export function CookieSettingsLink() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("cookie-consent");
        window.location.reload();
      }}
      className="text-[11px] text-[#444] transition-colors hover:text-[#777]"
    >
      Spravovat souhlas s cookies
    </button>
  );
}
