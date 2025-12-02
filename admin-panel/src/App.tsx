import AdminPanel from "./AdminPanel";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-black dark:text-background">
        {" "}
        Standalone Admin Panel
      </h1>
      <AdminPanel />
    </div>
  );
}
