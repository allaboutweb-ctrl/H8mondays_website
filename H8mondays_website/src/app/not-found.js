export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        gap: "1rem",
      }}
    >
      <h1>404!</h1>
      <p className="sm caps mono">Coming Soon</p>
    </div>
  );
}
