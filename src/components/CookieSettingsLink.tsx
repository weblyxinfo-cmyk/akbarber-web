"use client";

export function CookieSettingsLink() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("cookie-consent");
        window.location.reload();
      }}
      className="text-xs text-gray-light transition-colors hover:text-[#888]"
    >
      Spravovat souhlas s cookies
    </button>
  );
}
