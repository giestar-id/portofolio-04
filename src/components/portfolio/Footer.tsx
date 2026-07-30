export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Emma &mdash; Mathematics Graduate</p>
        <div className="flex items-center gap-4">
          <span>emma.math@email.com</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>LinkedIn</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>GitHub</span>
        </div>
      </div>
    </footer>
  );
}
