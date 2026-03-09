import { mockUser } from "@/lib/mock-data";

// Slim top bar — avatar pill with status dot on the left, help link on the right.
// Reference: design-reference/ref-homepage-full.png (top strip)
export function TopBar() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <div
            className="flex size-7 items-center justify-center rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: mockUser.avatarColor }}
          >
            {mockUser.initials}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-bg bg-success" />
        </div>
        <span className="text-sm font-semibold text-text">{mockUser.name}</span>
      </div>

      <div className="flex items-center gap-1.5 text-sm">
        <span className="font-semibold text-text">Need help?</span>
        <a href="#" className="text-text-secondary hover:text-text">
          View Resources
        </a>
      </div>
    </header>
  );
}
